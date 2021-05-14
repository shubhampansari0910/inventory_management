I am a Retail store owner, I have 3 warehouses to store my products and I am thinking of adding even more. As more customers are coming and purchasing it becomes very hard to keep track of inventory and there is no visibility of actual stock.
So, I want you to build me an Inventory Management System. Which Has Following Features:
Warehouse has three compartments Available, Damaged, Reserved.
Master Inventory View to see combined inventory in respective compartments of all warehouses.
Warehouse level inventory to how much inventory available in respective compartments at each warehouse
Inventory actions transaction log to see all history of single sku/product.
I want you to expose these features as an apis.


CREATE Product		
ARCHIVE Product		
GET single Product
				
GET LIST of Products with appropriate filter.
				
Increase/Decrease inventory of a product.
				
Add a warehouse.
	
Add products to the warehouse.
			
And keep in mind this system should be highly consistent.
		
	
The product contains these these metadata:
				
 sku_id-Unique Id of product maintained by client ( You have generate system uniqueId )		
 title - Short description of the product		
 Price.	
 Category		
 Storage_type-[normal,cold,hazard]
		
	

Need to include Documentation of Er Diagrams and Api documentation
