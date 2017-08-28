# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Note.destroy_all


randomTitle = ['1', '2', '3', '4']

15.times do

Note.create!(title: "Title #{randomTitle.sample}", body: 'Master cleanse pickled franzen trust fund woke fashion axe. Affogato skateboard everyday carry fashion axe DIY, letterpress bespoke heirloom VHS try-hard gentrify. Paleo hoodie tote bag whatever. Williamsburg fashion axe drinking vinegar meh iceland. Tousled af quinoa DIY lumbersexual cred flannel mlkshk bespoke 3 wolf moon', author_id: 1, notebook_id: 1, archived: false);

end


Notebook.destroy_all

Notebook.create!(title:'My first notebook', description: 'This notebook is pretty great', author_id: 1);
Notebook.create!(title:'My second notebook', description: 'This notebook is also pretty great', author_id: 1);
Notebook.create!(title:'My third notebook', description: 'This notebook is just great', author_id: 1);
