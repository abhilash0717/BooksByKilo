drop database if exists spring_boot;
create database spring_boot;
use spring_boot;

create table Books(
	 id INTEGER primary key auto_Increment,
	thumbnail varchar(500) not null,
	name varchar(100) not null,
	price INTEGER not null,
	weight INTEGER not null,
	category varchar(50) not null,
	author varchar(50) not null,
	collection varchar(50) not null

);
insert into Books values(1,"http://books.google.com/books/content?id=V3TTDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","Software Engineering at Google", 225, 200, "Software/IT", "Titus Winters", "New" )
insert into Books values(2,"http://books.google.com/books/content?id=SyHWBgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","Beginning Software Engineering", 125, 250, "Software/IT", "Rod Stephens", "Premium" )
insert into Books values(3,"http://books.google.com/books/content?id=r7LaCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","Blowout : A totally gripping thriller full of shocking twists", 85, 250, "Thriller/Crime", "Collen Cross", "Standard" )
insert into Books values(4,"http://books.google.com/books/content?id=TPlZvgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api","Suspense Thriller", 100, 150, "Thriller/Crime", "Paul Tomlinson", "Classic" )
insert into Books values(5,"http://books.google.com/books/content?id=H_y_rJ7QdxgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","The Penguin Book of Romantic Poetry", 175, 189, "Romance", "Jonathan Wordsworth", "New" )
insert into Books values(6,"http://books.google.com/books/content?id=Ga7RBgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api","An Incurable Romantic", 135, 289, "Romance", "Lakshmi Devnath", "Standard" )
insert into Books values(7,"http://books.google.com/books/content?id=Fe5kAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api","American Youth on Screen", 300, 239, "Teen Fiction",  "Timothy Shary", "Premium" )
insert into Books values(8,"http://books.google.com/books/content?id=EwPy91X5FvYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","The Secret to Teen Power", 400, 239, "Teen Fiction",  "Paul Harrington", "Classic" )
insert into Books values(9,"http://books.google.com/books/content?id=qXXHAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","Literary Fiction", 90, 539, "Non Fiction",  "Geir Farner", "New" )
insert into Books values(10,"http://books.google.com/books/content?id=fx0itwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api","The 100 Best Nonfiction Books of All Time", 501, 239, "Non Fiction",  "Robert McCrum", "Classic" )

commit;
select * from Books;
