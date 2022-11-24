--Create a simple SELECT query to display student 
--information of all ACTIVE students.

SELECT *
  FROM students
  WHERE IsActive

---------------------------------------------------------------------------------------

--You work at a book store. It's the end of the month, 
--and you need to find out the 5 bestselling books at your store. 
--Use a select statement to list names, authors, and number of copies 
--sold of the 5 books which were sold most.


SELECT name, author, copies_sold
  FROM books
  ORDER BY copies_sold DESC
  LIMIT 5


------------------------------------------------------------------------------------------------

--You are the owner of the Grocery Store. All your products are in the database, that you have created after CodeWars SQL excercises!:)
--You care about local market, and want to check how many products come from United States of America or Canada.
--Please use SELECT statement and IN to filter out other origins.
---In the results show how many products are from United States of America and Canada respectively.

--Order by number of products, descending.
--products table schema

--    id
--    name
--    price
--    stock
--    producer
--    country

--results table schema

--    products
--    country


SELECT 
  COUNT(country) AS products, 
  country FROM products 
WHERE 
  country IN('United States of America', 'Canada') 
GROUP BY country
ORDER BY products DESC


--SQL Basics: Simple JOIN with COUNT
SELECT p.id, p.name, count(*) as toy_count FROM people p JOIN toys t
ON p.id = t.people_id
GROUP BY p.id, p.name;

--SQL Basics: Mod
SELECT mod(number1, number2) AS mod
FROM decimals