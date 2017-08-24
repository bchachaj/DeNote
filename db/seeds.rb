# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Note.destroy_all


15.times do

Note.create!(title: 'Lorem Ipsum', body: 'Master cleanse pickled franzen trust fund woke fashion axe. Affogato skateboard everyday carry fashion axe DIY, letterpress bespoke heirloom VHS try-hard gentrify. Paleo hoodie tote bag whatever. Williamsburg fashion axe drinking vinegar meh iceland. Tousled af quinoa DIY lumbersexual cred flannel mlkshk bespoke 3 wolf moon', author_id: 1, notebook_id: 1, archived: false);

end
