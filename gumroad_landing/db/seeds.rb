# config/seeds.rb

# Create some creators
1.times do
    name = Faker::Name.name
    rating = Faker::Number.between(from: 3.5, to: 5.0).round(1)
    ratingAmt = Faker::Number.between(from: 100, to: 1000)
    pfp = Faker::Avatar.image(slug: name, size: '300x300', format: 'png')
  
    creator = Creator.create(
      name: name,
      rating: rating,
      ratingAmt: ratingAmt,
      pfp: pfp
    )
  
    # Create products for the creator
    rand(3..6).times do
      title = Faker::Commerce.product_name
      price = Faker::Commerce.price(range: 10.0..50.0)
      rating = Faker::Number.between(from: 3.5, to: 5.0).round(1)
      ratingAmt = Faker::Number.between(from: 50, to: 500)
      image = Faker::LoremFlickr.image(size: '300x300')
  
      creator.products.create(
        title: title,
        price: price,
        rating: rating,
        ratingAmt: ratingAmt,
        image: image
      )
    end
  end