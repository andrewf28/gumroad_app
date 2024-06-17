import { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const API_URL = "http://127.0.0.1:3000/api/v1";

const useStyles = makeStyles((theme) => ({
  productContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },
  productCard: {
    width: 200,
    height: 450,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000000",
    color: "#ffffff",
    borderRadius: 4,
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05)",
    transition: "0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12), 0.3s box-shadow, 0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12)",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)",
      border: "1px solid #ccc",
      borderBottomRightRadius: 10,
    },
  },
  productMedia: {
    height: 200,
    position: "relative",
    borderBottom: "1px solid #fff",
    "& img": {
      width: "100%",
      height: "auto",
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
  },
  productContent: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: "space-between",
  },
  authorInfo: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  authorAvatar: {
    marginRight: theme.spacing(1),
  },
  cardButton: {
    alignSelf: "flex-start",
    borderTop: "1px solid #fff",
    marginBottom: theme.spacing(1),
    backgroundColor: "#ed51d8",
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  buttonContainer: {
    borderTop: "1px solid #fff",
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: theme.spacing(0.1),
    width: "100%",
    padding: theme.spacing(2),
    marginTop: "auto",
    height: 20,
  },
  productInfo: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: theme.spacing(2),
  },
}));


const Star = ({ size, color }) => {
  return (
    <span
      style={{
        display: "inline-block",
        width: size,
        height: size,
        backgroundColor: color,
        clipPath:
          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        marginRight: "5px",
      }}
    />
  );
};

function ProductComponent({ productId }) {
    const classes = useStyles();
    const [product, setProduct] = useState(null);
    const [creator, setCreator] = useState(null);
    const [productComponent, setProductComponent] = useState(null);
    
  
    useEffect(() => {
      async function fetchProduct() {
        try {
          const componentResponse = await fetch(`${API_URL}/product_components/${productId}`);
          if (componentResponse.ok){
            console.log("response json",componentResponse.json);
            const componentData = await componentResponse.json();
            setProductComponent(componentData);
            // console.log(componentData);

            const response = await fetch(`${API_URL}/products/${componentData.product_id}`);
            console.log(`${API_URL}/products/${componentData.product_id}`);
            if (response.ok) {
              const productData = await response.json();
              setProduct(productData);
    
              const creatorResponse = await fetch(`${API_URL}/creators/${productData.creator_id}`);
              if (creatorResponse.ok) {
                const creatorData = await creatorResponse.json();
                setCreator(creatorData);
              } else {
                throw new Error("Failed to fetch creator data");
              }
            } else {
              throw new Error("Failed to fetch product data");
            }
          }
        } catch (error) {
          console.error("Error fetching product data:", error);
        }
      }
  
      fetchProduct();
    }, [productId]);
  
    if (!product || !creator) {
      console.log('PRODUCT',product);
      return <div>Loading...</div>;
    }
  
    return (
      <div className={classes.productContainer}>
        <Card className={classes.productCard}>
          <CardMedia className={classes.productMedia} image={product.image} title={product.title} />
          <CardContent className={classes.productContent}>
            <Typography gutterBottom variant="h5" component="h2" align="left">
              {product.title}
            </Typography>
            <div className={classes.authorInfo}>
              <Avatar className={classes.authorAvatar} src={creator.pfp} />
              <Typography variant="body2">{creator.name}</Typography>
            </div>
            <div className={classes.ratingContainer}>
              <Star size={10} color={"#ffffff"} />
              <Typography variant="body2" component="span">
                {product.rating} ({product.ratingAmt})
              </Typography>
            </div>
            <div className={classes.buttonContainer}>
              <Button variant="contained" className={classes.cardButton}>
                ${product.price}
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className={classes.productInfo}>
          <Typography variant="h4" component="h1" gutterBottom>
            {productComponent.title}
          </Typography>
          <Typography variant="body1" component="p">
            {productComponent.desc}
          </Typography>
        </div>
      </div>
    );
    }
    
    export default ProductComponent;