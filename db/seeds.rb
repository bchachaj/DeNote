# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!(username: 'Ben', password:'password')
User.create!(username: 'Demo', password: 'password')


Note.destroy_all


Note.create!(title: 'Refactoring', body: "<ol><li><strong>Refactoring</strong> -</li><li>code smells — drivers for refactoring, less risk of bugs or failure</li><li>Duplicated/similar code</li><li>Long methods</li><li>Too many parameters—excessively complex or too coupled</li><li>Indecent Exposure&nbsp;— minimize coupling between classes and objects.&nbspspeculative Generality __ YAGNI __ don’t try to solve abstract problems with needing to&nbsp;</li><li>God object — tightly connected to all other objects in the system. Nothing in the program needs to even know about the existence of everything else.&nbsp;</li><li>Dead code — comments or unused code</li></ol><br></p>Coupling (dependency) is the degree to which each program module relies on each one of the other modules.</span></p>— If you have to change internals of one class because of another, then coupled too closely.&nbsp;</p>", author_id: 1, notebook_id: 2, archived: true);


Note.create!(title: 'Google Searching', body: "I had this saved from here...
Many more great tips here
One very powerful, but undocumented, search tool, is the AROUND function. If you wanted to research Barack Obama's interactions with Australia, you could simply include both terms in a search, but you'd find thousands of articles in which these two terms may appear many paragraphs apart, and bear no relation to one another.
But if instead you search \"obama\" AROUND(10) \"australia\" then the first results will be one in which Obama appears within ten words of Australia. NOTE: for this to work, both search terms must be in quotes, AROUND must be capitalized, and the number must be in parentheses.
Knowing how and when to use the minus sign in a search query. i.e. search George Washington -gwu.edu
Also ~ before a word to search simultaneously for the synonyms of that word.
<number>..<number> to search for a range of numbers. For example, 1..10
(*) as a wildcard in quoted search strings to stand for one or many unknown words. \"The * cat\" will return things like The angry cat, the big brown cat...
(+) will ensure that a word is included in every search result. (per u/izerth, google got rid of the + operator, so now you have to put \" around single words or use search tools->results->verbatim)
Quotes surrounding a phrase will ensure that exact phrase turns up.
filetype: .whatever will make sure URLs have that extension at the end.
inurl: some.words_here will make sure whatever follows shows up in the URL. Good for refining your search by domain name.
site:sitename.com will return only results from that site", author_id: 1, notebook_id: 1, archived: true);








Note.create!(title: 'Cover Letter power words', body: "<p>Cover letter power word</p><p> </p><p><br></p><p> </p><p>Produced</p><p> </p><p>Organized</p><p> </p><p>controlled</p><p> </p><p><br></p><p> </p><p>established</p><p> </p><p>formulated&nbsp;</p><p> </p><p>implemented</p><p> </p><p>Correspond</p><p> </p><p>convey</p><p> </p><p>navigated</p><p> </p><p><br></p><p> </p><p>Spearheaded</p><p> </p><p>Pioneered</p><p> </p><p>Amplified</p><p> </p><p>Advocated</p><p> </p><p>Qualified</p><p> </p><p>Discovered</p><p> </p><p><br></p><p> </p><p>Targeted</p><p> </p><p>Demonstrated</p><p> </p><p>Attained</p><p> </p><p><br></p><p> </p><p>Scrutinize</p><p> </p><p>inspect</p><p> </p><p>verify</p><p> </p><p>validate</p>", author_id: 1, notebook_id: 1, archived: false);



Note.create!(title: 'Words', body: "\"<p>Forget them as soon as you can, tomorrow is a new day;
begin it well and serenely, with too high a spirit
to be cumbered with your old nonsense.</p>
<br/>
<p>
This new day is too dear,
with its hopes and invitations,
to waste a moment on the yesterdays.”</p>", author_id: 1, notebook_id: 1, archived: true);



Notebook.destroy_all

Notebook.create!(title:'Useful things', author_id: 1);
Notebook.create!(title:'Work notes ', author_id: 1);
Notebook.create!(title:'Important 🔓', author_id: 1);

Tag.destroy_all

Tag.create!(name: 'javascript', author_id: 1);
Tag.create!(name: 'shared', author_id: 1);
Tag.create!(name: 'meh', author_id: 1);
Tag.create!(name: 'Super cool', author_id: 1);

Tagging.destroy_all

Tagging.create!(note_id: 1, tag_name: 'javascript');
Tagging.create!(note_id: 1, tag_name: 'shared');
Tagging.create!(note_id: 2, tag_name: 'meh');
