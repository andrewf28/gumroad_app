# seeds.rb
require 'faker'

# Create test creators
5.times do
  Creator.create(
    name: Faker::Name.name,
    rating: rand(1.0..5.0).round(1),
    ratingAmt: rand(1..100),
    pfp: Faker::Avatar.image
  )
end

# Create test products, images, and rich texts for each creator
Creator.all.each do |creator|
  # Create test products
  5.times do
    creator.products.create(
      title: Faker::Commerce.product_name,
      price: Faker::Commerce.price(range: 10..100.0),
      rating: rand(1.0..5.0).round(1),
      ratingAmt: rand(1..100),
      image: Faker::LoremFlickr.image(size: "300x300", search_terms: ['product'])
    )
  end

  # Create test images
  3.times do
    creator.images.create(
      title: Faker::Lorem.sentence,
      description: Faker::Lorem.paragraph,
      image_url: Faker::LoremFlickr.image(size: "500x500", search_terms: ['nature'])
    )
  end

  # Create test rich texts
  2.times do
    creator.rich_texts.create(
      title: Faker::Lorem.sentence,
      description: Faker::Lorem.paragraph(sentence_count: 5)
    )
  end
end

# Create test layouts for each creator
Creator.all.each do |creator|
  layout = [
    {
      type: 'image',
      image_id: creator.images.sample.id
    },
    {
      type: 'rich_text',
      rich_text_id: creator.rich_texts.sample.id
    },
    {
      type: 'products',
      products: nil
    }
  ]

  creator.create_creator_layout(layout: layout)
end