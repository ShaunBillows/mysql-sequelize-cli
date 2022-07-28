example queries<br />
<br />
node src/app --movies --read <br />
node src/app --movies --create --title "spiderman 3" --actor "tom holland"<br />
node src/app --movies --update --oldTitle spiderman --oldActor "tom holland" --newTitle "spiderman 4" --newActor "toby mcguire"<br />
node src/app --movies --delete --title "spiderman 2" --actor "toby mcguire"<br />
node src/app --movies --deleteAll<br />
<br />
node src/app --tvShows --read<br />
node src/app --tvShows --create --title "spiderman 3" --actor "tom holland"<br />
node src/app --tvShows --update --oldTitle spiderman --oldActor "tom holland" --newTitle "spiderman 4" --newActor "toby mcguire"<br />
node src/app --tvShows --delete --title "spiderman 2" --actor "toby mcguire"<br />
node src/app --tvShows --deleteAll<br />
