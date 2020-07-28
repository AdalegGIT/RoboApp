# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
100.times do |n|
    Robot.create({name: Faker::Name.name, address: Faker::Internet.ip_v4_address, modelNumber: rand(10000..9999999), lasers: [true, false].sample, japanse: [true, false].sample})

end