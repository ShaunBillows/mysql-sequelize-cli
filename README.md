example queries

node src/app --movies --read
node src/app --movies --create --title "spiderman 3" --actor "tom holland"
node src/app --movies --update --oldTitle spiderman --oldActor "tom holland" --newTitle "spiderman 4" --newActor "toby mcguire"
node src/app --movies --delete --title "spiderman 2" --actor "toby mcguire"
node src/app --movies --deleteAll

node src/app --tvShows --read
node src/app --tvShows --create --title "spiderman 3" --actor "tom holland"
node src/app --tvShows --update --oldTitle spiderman --oldActor "tom holland" --newTitle "spiderman 4" --newActor "toby mcguire"
node src/app --tvShows --delete --title "spiderman 2" --actor "toby mcguire"
node src/app --tvShows --deleteAll
