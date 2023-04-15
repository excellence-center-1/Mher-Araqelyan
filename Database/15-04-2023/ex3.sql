/*Exercise 3:
Create a procedure that accepts a date range and returns the total revenue generated during that time period.*/
create or replace procedure get_info3(time1 timestamp,time2 timestamp)
language plpgsql
as $$
DECLARE
    pprice2 smallint;
    pprice1 smallint;
    total_count1 smallint;
    total_count2 smallint;
    total_amount1 smallint;
    total_amount2 smallint;
    total_amount smallint;
begin
        
        

        select into total_count1 sum(quantity) from orders where  (order_date  between time1 and time2) and product_id = 1 ;
	select into total_count2 sum(quantity) from orders where  (order_date  between time1 and time2) and product_id = 2 ;
        select into pprice1 price from product where id=1;
	select into pprice2 price from product where id=2;
        select into total_amount1 pprice1*total_count1;
	select into total_amount2 pprice2*total_count2;
        select into total_amount total_amount1+total_amount2;
     	RAISE NOTICE 'Total Amount Spent of this period: %', total_amount;

end; $$;

