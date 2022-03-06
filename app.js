// let shoe = document.getElementById('shoe');
// let jewelry = document.getElementById('jewelry');

let all = document.getElementById('all');

const store = {
	shoe:[
		{
			index:'s01',
			name:'2021 Mens Casual Noble Shoes Running Sneakers - Black Gold',
			image:'2021 Mens Casual Noble Shoes Running Sneakers - Black Gold.jpg',
			price:'$150',
			like: false
		},
		{
			index:'s02',
			name:'Cornel Trending Men Black Suede Pam',
			image:'Cornel Trending Men Black Suede Pam.jpg',
			price:'$520',
			like: false
		},
		{
			index:'s03',
			name:'Female Bow Tie Sneakers - White',
			image:'Female Bow Tie Sneakers - White.jpg',
			price:'$520',
			like: false
		},
		{
			index:'s04',
			name:'Trendy Women Heeled Shimmery Slippers- White',
			image:'Trendy Women Heeled Shimmery Slippers- White.jpg',
			price:'$520',
			like: false
		},
		{
			index:'s05',
			name:'Solid Color Men Canvas Shoes Breathable Outdoor Casual-black',
			image:'Solid Color Men Canvas Shoes Breathable Outdoor Casual-black.jpg',
			price:'$520',
			like: false
		},
		{
			index:'s06',
			name:'Valentina Luxury Silver Shoe And Bag1',
			image:'Valentina Luxury Silver Shoe And Bag1.jpg',
			price:'$520',
			like: false
		},
		{
			index:'s07',
			name:"Men's Casual PU Leather Shoes Business Dress Shoes-brown",
			image:"Men's Casual PU Leather Shoes Business Dress Shoes-brown.jpg",
			price:'$350',
			like: false
		},
		{
			index:'s08',
			name:'E. Mich Al Pacino Leather Loafers - Black',
			image:'E. Mich Al Pacino Leather Loafers - Black.jpg',
			price:'$500',
			like: false
		},
		{

			index:'s09',
			name:'Trendy Designed Causal Unisex ShoeSneakers',
			image:'Trendy Designed Causal Unisex ShoeSneakers.jpg',
			price:'$150',
			like: false
		},
		{
			index:'s10',
			name:'Mens Half Shoes Half Formal Shoes Black Silver',
			image:'Mens Half Shoes Half Formal Shoes Black Silver.jpg',
			price:'$520',
			like: false
		},
		{
			index:'s11',
			name:"Shark Bottom Tide Shoes Men's Personality Sneakers -Beige",
			image:"Shark Bottom Tide Shoes Men's Personality Sneakers -Beige.jpg",
			price:'$520',
			like: false
		},
		{
			index:'s12',
			name:"Men's Business Dress Casual Shoes - Black",
			image:"Men's Business Dress Casual Shoes - Black.jpg",
			price:'$520',
			like: false
		},
		{
			index:'s13',
			name:'Nila&Nila Nila & Nila Wedge Slippers - Pink',
			image:'Nila&Nila Nila & Nila Wedge Slippers - Pink.jpg',
			price:'$520',
			like: false
		},
		{
			index:'s14',
			name:'Women D Cow Leather Zipper Leather Peep Toe Platform',
			image:'Women D Cow Leather Zipper Leather Peep Toe Platform.jpg',
			price:'$350',
			like: false
		},
		{

			index:'s15',
			name:"Men's Arrow Breathable Sneakers-v2",
			image:"Men's Arrow Breathable Sneakers-v2.jpg",
			price:'$150',
			like: false
		},
		{

			index:'s16',
			name:'Hzb Sleek Suede Slip On Sneaker With White Sole - Coffee',
			image:'Hzb Sleek Suede Slip On Sneaker With White Sole - Coffee.jpg',
			price:'$150',
			like: false
		},
		{

			index:'s17',
			name:"Two-Tones Designed Men's Palm Slippers - Black & Red",
			image:"Two-Tones Designed Men's Palm Slippers - Black & Red.jpg",
			price:'$150',
			like: false
		},
		{

			index:'s18',
			name:'Cornel Trending Men Black Suede Pam',
			image:'Cornel Trending Men Black Suede Pam.jpg',
			price:'$150',
			like: false
		},
		{

			index:'s19',
			name:'Pam Sexy Ladies Suede Casual Flat Slippers-black',
			image:'Pam Sexy Ladies Suede Casual Flat Slippers-black.jpg',
			price:'$150',
			like: false
		},
	],
	jewelry:[
		{

			index:'j01',
			name:'Magnificent Women Wedding Necklace And Jewelry Set- Gold',
			image:'Magnificent Women Wedding Necklace And Jewelry Set- Gold.jpg',
			price:'$150',
			like: false
		},
		{

			index:'j02',
			name:'2 Piece Couples friendship Necklaces',
			image:'2 Piece Couples friendship Necklaces.jpg',
			price:'$150',
			like: false
		},
		{

			index:'j03',
			name:'2Pcs Set Couple Forever Pendants Necklace For Lovers Valentines',
			image:'2Pcs Set Couple Forever Pendants Necklace For Lovers Valentines.jpg',
			price:'$150',
			like: false
		},
		{

			index:'j04',
			name:'2pcs I Love You Forever&Always Couple Pendants Necklace For Lovers Valentines',
			image:'2pcs I Love You Forever&Always Couple Pendants Necklace For Lovers Valentines.jpg',
			price:'$150',
			like: false
		},
		{
			index:'j05',
			name:'2Pcs Set Couple Pendants Necklace For Lovers Valentines',
			image:'2Pcs Set Couple Pendants Necklace For Lovers Valentines.jpg',
			price:'$520',
			like: false
		},
		{
			index:'j06',
			name:'Best Friends Love Heart Couple Necklace. Jewelry',
			image:'Best Friends Love Heart Couple Necklace. Jewelry.jpg',
			price:'$350',
			like: false
		},
		{
			index:'j07',
			name:'Binbond Best Selling Quality & Rugged Couples Exclusive Wrist Watch + Classic Couples Bracelet',
			image:'Binbond Best Selling Quality & Rugged Couples Exclusive Wrist Watch + Classic Couples Bracelet.jpg',
			price:'$500',
			like: false
		},
		{

			index:'j08',
			name:'OLEVS 8697 Couple Fashion Waterproof Luminous Quartz Watch',
			image:'OLEVS 8697 Couple Fashion Waterproof Luminous Quartz Watch.jpg',
			price:'$150',
			like: false
		},
		{

			index:'j09',
			name:'Multilayer Braided Hand Bracelets – Love.jpg',
			image:'Multilayer Braided Hand Bracelets – Love.jpg',
			price:'$150',
			like: false
		},
		{
			index:'j10',
			name:'Couple White And Gold Chronograph Watch -AR5859',
			image:'Couple White And Gold Chronograph Watch -AR5859.jpg',
			price:'$520',
			like: false
		},
		{
			index:'j11',
			name:'Michael Kors Couples Lexington Black Dial Chronograph Two Tone Watch',
			image:'Michael Kors Couples Lexington Black Dial Chronograph Two Tone Watch.jpg',
			price:'$350',
			like: false
		},
		{
			index:'j12',
			name:'2Pcs Set Couple Magnetic Bracelets Gift For Best Friends Lovers Valentines',
			image:'2Pcs Set Couple Magnetic Bracelets Gift For Best Friends Lovers Valentines.jpg',
			price:'$500',
			like: false
		},
		{

			index:'j13',
			name:'2pcs Couple Luminous Pearl Bracelet For Best Friends Lovers Valentines Gif',
			image:'2pcs Couple Luminous Pearl Bracelet For Best Friends Lovers Valentines Gif.jpg',
			price:'$150',
			like: false
		},
		{

			index:'j14',
			name:'Best Quality Cuban Chain+Studded Lion Head Pendant',
			image:'Best Quality Cuban Chain+Studded Lion Head Pendant-.jpg',
			price:'$150',
			like: false
		},
		{
			index:'j15',
			name:'Moon Light Turmulin Beads 6 Lines',
			image:'Moon Light Turmulin Beads 6 Lines.jpg',
			price:'$520',
			like: false
		},
		{
			index:'j16',
			name:'White 18 Carat Wedding Ring Set',
			image:'White 18 Carat Wedding Ring Set.jpg',
			price:'$350',
			like: false
		},
		{
			index:'j17',
			name:'Cuban Link Chain With Crucifix Cross Pendant 2in1GOLD',
			image:'Cuban Link Chain With Crucifix Cross Pendant 2in1GOLD.jpg',
			price:'$500',
			like: false
		},
		{

			index:'j18',
			name:'Delicate Male Diamond Ruby Ring Black & Red',
			image:'Delicate Male Diamond Ruby Ring Black & Red.jpg',
			price:'$150',
			like: false
		},
		{

			index:'j19',
			name:'Diamond Engagement Ring Wedding Band Set For Women',
			image:'Diamond Engagement Ring Wedding Band Set For Women.jpg',
			price:'$150',
			like: false
		},
		{

			index:'j20',
			name:'Lovely Wedding Couple Ring Set',
			image:'Lovely Wedding Couple Ring Set.jpg',
			price:'$150',
			like: false
		},
		{

			index:'j21',
			name:'2Pcs Set Couple Rings Jewelry Adjustable Ring',
			image:'2Pcs Set Couple Rings Jewelry Adjustable Ring.jpg',
			price:'$150',
			like: false
		},
	],
	bag:[
		{

			index:'b01',
			name:'Classic Briefcase Two Way Travelling Anti Theft Laptop Bag Plus Free Gift',
			image:'Classic Briefcase Two Way Travelling Anti Theft Laptop Bag Plus Free Gift.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b02',
			name:'Smart Anti Theft Laptop Backpack With USB Port For Men & Women',
			image:'Smart Anti Theft Laptop Backpack With USB Port For Men & Women.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b03',
			name:'Women Pink Kawai Embroidery Bags Handbags Lolita Bussiness Shoulder Women Bag',
			image:'Women Pink Kawai Embroidery Bags Handbags Lolita Bussiness Shoulder Women Bag.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b04',
			name:'Women Pink Kawai Embroidery Bow Handbags Lolita Bussiness Shoulder Women Bag',
			image:'Women Pink Kawai Embroidery Bow Handbags Lolita Bussiness Shoulder Women Bag.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b05',
			name:'Laptop Handbag',
			image:'Laptop Handbag.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b06',
			name:'Laptop Handbag Large Capacity For Men Women Travel Briefcase Bussiness',
			image:'Laptop Handbag Large Capacity For Men Women Travel Briefcase Bussiness.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b07',
			name:'Women Men Bag Laptop Handbag Travel Bussiness Male',
			image:'Women Men Bag Laptop Handbag Travel Bussiness Male.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b08',
			name:"Cowhide Bag Male Briefcase Leather Men's Shoulder Bag",
			image:"Cowhide Bag Male Briefcase Leather Men's Shoulder Bag.jpg",
			price:'$150',
			like: false
		},
		{

			index:'b09',
			name:'Jeep Buluo JEEP BULIO BROWN HIGH QUALITY LAPTOP BAG',
			image:'Jeep Buluo JEEP BULIO BROWN HIGH QUALITY LAPTOP BAG.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b10',
			name:'Unisex Casual Embroidery Thread Crossbody Chest Bag',
			image:'Unisex Casual Embroidery Thread Crossbody Chest Bag.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b11',
			name:'Men Fashion Crossbody Bag Travel Shoulder Bag',
			image:'Men Fashion Crossbody Bag Travel Shoulder Bag.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b12',
			name:"Men's Crossbody Bag Shoulder Bag Handbag - Brown",
			image:"Men's Crossbody Bag Shoulder Bag Handbag - Brown.jpg",
			price:'$150',
			like: false
		},
		{

			index:'b13',
			name:'2pc Lady Leather Messenger Shoulder Bag Handbag Tote Satchel',
			image:'2pc Lady Leather Messenger Shoulder Bag Handbag Tote Satchel.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b14',
			name:'CARLO SALVATELLI Bag - Nude',
			image:'CARLO SALVATELLI Bag - Nude.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b15',
			name:'Gusto trendz Red Lips Designed Tote Bag',
			image:'Gusto trendz Red Lips Designed Tote Bag.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b16',
			name:'Women Canvas Bag Handbag Zipper Characters Shopping Tote Bag',
			image:'Women Canvas Bag Handbag Zipper Characters Shopping Tote Bag.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b17',
			name:'Super Cute Small Ladies Bag Cream)',
			image:'Super Cute Small Ladies Bag Cream).jpg',
			price:'$150',
			like: false
		},
		{

			index:'b18',
			name:"Women's Fashion Chain Small Crossbody Hangbag B032Brown",
			image:"Women's Fashion Chain Small Crossbody Hangbag B032Brown.jpg",
			price:'$150',
			like: false
		},
		{

			index:'b19',
			name:'Ladies Backpack Handbag For Women Purse Satchel  Black',
			image:'Ladies Backpack Handbag For Women Purse Satchel  Black.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b20',
			name:'GATWIGA Black Casual Bag Business Laptop Backpack',
			image:'GATWIGA Black Casual Bag Business Laptop Backpack.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b21',
			name:'Backpack Three-piece Set Of Men And Women',
			image:'Backpack Three-piece Set Of Men And Women.jpg',
			price:'$150',
			like: false
		},
		{

			index:'b22',
			name:'GATWIGA 3 IN 1 Bag Set Pencil Crossbody Laptop Backpack Grey',
			image:'GATWIGA 3 IN 1 Bag Set Pencil Crossbody Laptop Backpack Grey.jpg',
			price:'$150',
			like: false
		},
	],
	cloth:[
		{

			index:'c01',
			name:'Man Suit Jacket Slim Fashion One Button Men Blaze',
			image:'Man Suit Jacket Slim Fashion One Button Men Blaze.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c02',
			name:"Two-piece Suit Long-sleeved Men's Sportswear Jacket Printing",
			image:"Two-piece Suit Long-sleeved Men's Sportswear Jacket Printing.jpg",
			price:'$150',
			like: false
		},
		{

			index:'c03',
			name:"Fitted Men's Suit - Navy Blue",
			image:"Fitted Men's Suit - Navy Blue.jpg",
			price:'$150',
			like: false
		},
		{

			index:'c04',
			name:'Mens 3-Piece Slim Fit Single Breasted Smart Wedding Formal Turkey Suit',
			image:'Mens 3-Piece Slim Fit Single Breasted Smart Wedding Formal Turkey Suit.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c05',
			name:"Fashion Men's Autumn Winter Casual Camouflage Zipper Long Sleeve Top Blouse Jacket Coat Fovibery",
			image:"Fashion Men's Autumn Winter Casual Camouflage Zipper Long Sleeve Top Blouse Jacket Coat Fovibery.jpg",
			price:'$150',
			like: false
		},
		{

			index:'c06',
			name:'Jesus Christ Black Polo Men And Woman Deseign Shirt Fitted',
			image:'Jesus Christ Black Polo Men And Woman Deseign Shirt Fitted.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c07',
			name:'Faith Jesus Combo Round Neck T-shirts',
			image:'Faith Jesus Combo Round Neck T-shirts.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c08',
			name:'Ellaa Two Toned Corporate Work Dress YellowBlue',
			image:'Ellaa Two Toned Corporate Work Dress YellowBlue.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c09',
			name:'Hot Dresses New Party Fashion Dresses Waist- Dress BLACK',
			image:'Hot Dresses New Party Fashion Dresses Waist- Dress BLACK.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c10',
			name:'Danami Tie & Die Printed Crop HoodieBlack',
			image:'Danami Tie & Die Printed Crop HoodieBlack.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c11',
			name:'TEES BY WANNA Rooted In Christ T-shirt - Black',
			image:'TEES BY WANNA Rooted In Christ T-shirt - Black.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c12',
			name:'Jesus T Shirt  Accept Or Decline That Is Question Design Faith Tshirt  Fashionable',
			image:'Jesus T Shirt  Accept Or Decline That Is Question Design Faith Tshirt  Fashionable.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c13',
			name:'Lydiaz Maxi Free Dress With Animal Print Belt  Royal Blue',
			image:'Lydiaz Maxi Free Dress With Animal Print Belt  Royal Blue.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c14',
			name:"Women's Short Sleeved Party Dresses Large Size pink",
			image:"Women's Short Sleeved Party Dresses Large Size pink.jpg",
			price:'$150',
			like: false
		},
		{

			index:'c15',
			name:'Yellow lady Hoodie',
			image:'Yellow lady Hoodie.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c16',
			name:'Mvc Jesus Love Flock Design T-Shirt - White',
			image:'Mvc Jesus Love Flock Design T-Shirt - White.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c17',
			name:"100% Cotton T-shirt 4 Pcs Shirts Men's Fashion Short Sleeve",
			image:"100% Cotton T-shirt 4 Pcs Shirts Men's Fashion Short Sleeve.jpg",
			price:'$150',
			like: false
		},
		{

			index:'c18',
			name:'Danami Button Designed Black Grey Contrast Round Neck T-Shirt',
			image:'Danami Button Designed Black Grey Contrast Round Neck T-Shirt.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c19',
			name:'Rott Dog Print T-Shirt Tees Shirt Polo Crew Neck - White',
			image:'Rott Dog Print T-Shirt Tees Shirt Polo Crew Neck - White.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c20',
			name:'Couple Joggers With Stripe',
			image:'Couple Joggers With Stripe.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c21',
			name:"Men's Vintage Loose Casual Ethnic Short Sleeve Shirt",
			image:"Men's Vintage Loose Casual Ethnic Short Sleeve Shirt.jpg",
			price:'$150',
			like: false
		},
		{

			index:'c22',
			name:'Jones Wears Marshmello Printed Hoodie Black',
			image:'Jones Wears Marshmello Printed Hoodie Black.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c233',
			name:'Oblique Zippers Color Block Fleece Hoodie Jacket Sweatshirts  BLACK',
			image:'Oblique Zippers Color Block Fleece Hoodie Jacket Sweatshirts  BLACK.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c24',
			name:'Women Fashion Polo Ladies Queen Short Sleeve T-shirt1',
			image:'Women Fashion Polo Ladies Queen Short Sleeve T-shirt1.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c25',
			name:'Rushed Cold Shoulder Ruffle Sleeve Dress-Green',
			image:'Rushed Cold Shoulder Ruffle Sleeve Dress-Green.jpg',
			price:'$150',
			like: false
		},
		{

			index:'c26',
			name:'BOSS LADY QUALITY TEE SHIRT WITH PREMIUM GOLD PRINT  BLACK',
			image:'BOSS LADY QUALITY TEE SHIRT WITH PREMIUM GOLD PRINT  BLACK.jpg',
			price:'$150',
			like: false
		},
	],
	phone:[
		{

			index:'p01',
			name:'I13proMAX 16GB RAM 512GB ROM 50MP 32MP Camera,6800mAh,6.7',
			image:'I13proMAX 16GB RAM 512GB ROM 50MP 32MP Camera,6800mAh,6.7.jpg',
			price:'$150',
			like: false
		},
		{

			index:'p02',
			name:'Samsung Galaxy Fold 7.3-Inch Dynamic AMOLED',
			image:'Samsung Galaxy Fold 7.3-Inch Dynamic AMOLED.jpg',
			price:'$150',
			like: false
		},
		{

			index:'p03',
			name:'Apple IPad Pro 12.9 M1 2021 Model With Wi-Fi Cellular - 1TB - Silver',
			image:'Apple IPad Pro 12.9 M1 2021 Model With Wi-Fi Cellular - 1TB - Silver.jpg',
			price:'$150',
			like: false
		},
		{

			index:'p04',
			name:'Itel S17 6.6',
			image:'Itel S17 6.6.jpg',
			price:'$150',
			like: false
		},
		{

			index:'p05',
			name:'Samsung Galaxy Note 20 Ultra - 6.9',
			image:'Samsung Galaxy Note 20 Ultra - 6.9.jpg',
			price:'$150',
			like: false
		},
		{

			index:'p06',
			name:'Oneplus 9 Pro - 6.7',
			image:'Oneplus 9 Pro - 6.7.jpg',
			price:'$150',
			like: false
		},
		{

			index:'p07',
			name:'Hw22 Series 6-Customized Wallpaper BLT Call Blood Oxygen BP',
			image:'Hw22 Series 6-Customized Wallpaper BLT Call Blood Oxygen BP.jpg',
			price:'$150',
			like: false
		},
		{

			index:'p08',
			name:'Blackview Oscal C20Pro 32GB+2GB 4G Android 11 Smartphone 6 Inch Screen 8MP+2MP Camera-Blue',
			image:'Blackview Oscal C20Pro 32GB+2GB 4G Android 11 Smartphone 6 Inch Screen 8MP+2MP Camera-Blue.jpg',
			price:'$150',
			like: false
		},
		{

			index:'p09',
			name:'Honor 20 Dual Sim 8+256GB Android 9.0 Kirin 980 Octa Core 32.0MP + Four Camera 6.26 Inch - Green',
			image:'Honor 20 Dual Sim 8+256GB Android 9.0 Kirin 980 Octa Core 32.0MP + Four Camera 6.26 Inch - Green.jpg',
			price:'$150',
			like: false
		},
		{

			index:'p10',
			name:'Blackview Oscal C20Pro 32GB+2GB 4G Android 11 Smartphone 6 Inch Screen 8MP+2MP Camera-Black',
			image:'Blackview Oscal C20Pro 32GB+2GB 4G Android 11 Smartphone 6 Inch Screen 8MP+2MP Camera-Black.jpg',
			price:'$150',
			like: false
		},
		{

			index:'p11',
			name:'Samsung A32 Awesome White',
			image:'Samsung A32 Awesome White.jpg',
			price:'$150',
			like: false
		},
		{

			index:'p12',
			name:'XIAOMI Redmi Note 10 Pro Dual SIM - 8GB RAM, 128GB ROM - 4G LTE - With Mi Band 5 - Onyx Gray',
			image:'XIAOMI Redmi Note 10 Pro Dual SIM - 8GB RAM, 128GB ROM - 4G LTE - With Mi Band 5 - Onyx Gray.jpg',
			price:'$150',
			like: false
		},
		{

			index:'p13',
			name:'Vivo V21, 6.44-Inch, 8GB RAM 128GB ROM Android 11 (64MP + 8MP + 2MP) + 44MP Dual SIM - Dusk Blue',
			image:'Vivo V21, 6.44-Inch, 8GB RAM 128GB ROM Android 11 (64MP + 8MP + 2MP) + 44MP Dual SIM - Dusk Blue.jpg',
			price:'$150',
			like: false
		},
	],
	laptop:[
		{

			index:'l01',
			name:'Lenovo THINKPAD X1 CARBON GEN 9 CORE I7 11TH GEN',
			image:'Lenovo THINKPAD X1 CARBON GEN 9 CORE I7 11TH GEN.jpg',
			price:'$150',
			like: false
		},
		{

			index:'l02',
			name:'Hp SPECTRE 15 X360 11TH GEN CORE I7,256 SSD(+1TB External HDD)16GB RAM,4K DISPLAY,BACKLIT,WIN 10 PRO+ Headset',
			image:'Hp SPECTRE 15 X360 11TH GEN CORE I7,256 SSD(+1TB External HDD)16GB RAM,4K DISPLAY,BACKLIT,WIN 10 PRO+ Headset.jpg',
			price:'$150',
			like: false
		},
		{

			index:'l03',
			name:'Msi WS66-10TKT-080US Core I7-10875H 1TB SSD 32GB Nvidia RTX 3000 6GB',
			image:'Msi WS66-10TKT-080US Core I7-10875H 1TB SSD 32GB Nvidia RTX 3000 6GB.jpg',
			price:'$150',
			like: false
		},
		{

			index:'l04',
			name:'DELL XPS 17 9710 17 UHD 11th Gen Core I9 1TB SSD 32GB RAM 6GB NVIDIA BACKLIT FINGERPRINT WIN 11 PRO',
			image:'DELL XPS 17 9710 17 UHD 11th Gen Core I9 1TB SSD 32GB RAM 6GB NVIDIA BACKLIT FINGERPRINT WIN 11 PRO.jpg',
			price:'$150',
			like: false
		},
		{

			index:'l05',
			name:'Apple MacBook Pro 14 M1 Pro Chip 16GB RAM,1TB(2021 Model)Silver',
			image:'Apple MacBook Pro 14 M1 Pro Chip 16GB RAM,1TB(2021 Model)Silver.jpg',
			price:'$150',
			like: false
		},
		{

			index:'l06',
			name:'DELL ALIENWARE M15 RYZEN™ EDITION R5 GAMING LAPTOP',
			image:'DELL ALIENWARE M15 RYZEN™ EDITION R5 GAMING LAPTOP.jpg',
			price:'$150',
			like: false
		},
		{

			index:'l07',
			name:'Hp ENVY 31.5 4K All-In-One Core I7 - 16GB RAM - 4GB NVIDIA GeForce GTX 1650 - 1TB SSD',
			image:'Hp ENVY 31.5 4K All-In-One Core I7 - 16GB RAM - 4GB NVIDIA GeForce GTX 1650 - 1TB SSD.jpg',
			price:'$150',
			like: false
		},
		{

			index:'l08',
			name:'Hp Envy 15 X360 10th Gen Intel Core I7(12GB RAM,512SSD,32GB Optane, Backlit Touch) Windows 10',
			image:'Hp Envy 15 X360 10th Gen Intel Core I7(12GB RAM,512SSD,32GB Optane, Backlit Touch) Windows 10.jpg',
			price:'$150',
			like: false
		},
		{

			index:'l09',
			name:'Hp Notebook 15 Intel Core I3 (16GB RAM, 1TB HDD)-Win 10 + MOUSE',
			image:'Hp Notebook 15 Intel Core I3 (16GB RAM, 1TB HDD)-Win 10 + MOUSE.jpg',
			price:'$150',
			like: false
		},
		{

			index:'l10',
			name:'Microsoft SURFACE PRO 7  CORE I7 PROCESSOR 11TH GEN, 512 16GB PLATINUM',
			image:'Microsoft SURFACE PRO 7  CORE I7 PROCESSOR 11TH GEN, 512 16GB PLATINUM.jpg',
			price:'$150',
			like: false
		},
		{

			index:'l11',
			name:'Lenovo Ideapad Intel Celeron 1TB HDD 8GB RAM Win 10 32GB Flash',
			image:'Lenovo Ideapad Intel Celeron 1TB HDD 8GB RAM Win 10 32GB Flash.jpg',
			price:'$150',
			like: false
		},
		{

			index:'l12',
			name:'ASUS Notebook E Laptop Pro I7 7700HQ 16GB 512GB',
			image:'ASUS Notebook E Laptop Pro I7 7700HQ 16GB 512GB.jpg',
			price:'$150',
			like: false
		},
	],

	food:[
		{

			index:'f01',
			name:'indomie chicken egg and plantain',
			image:'indomie chicken egg and plantain.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f02',
			name:'indomie and egg',
			image:'indomie and egg.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f03',
			name:'Fearless Energy Drinks',
			image:'Fearless Energy Drinks.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f04',
			name:'Egg and Cheese Bread Omelet',
			image:'Egg and Cheese Bread Omelet.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f05',
			name:'Eggy bread with ham and cheese',
			image:'Eggy bread with ham and cheese.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f06',
			name:'Predator Energy Drink',
			image:'Predator Energy Drink.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f07',
			name:'Pounded yam and Egunsi soup',
			image:'Pounded yam and Egunsi soup.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f08',
			name:'Amala Ewedu and Gbegiri',
			image:'Amala Ewedu and Gbegiri.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f09',
			name:'nkwobi',
			image:'nkwobi.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f10',
			name:'Abacha and Ugba',
			image:'Abacha and Ugba.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f11',
			name:'Amala and Gbegiri',
			image:'Amala and Gbegiri.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f12',
			name:'eba and okro soup',
			image:'eba and okro soup.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f13',
			name:'yellow-garri and egunsi',
			image:'yellow-garri and egunsi.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f14',
			name:'dan wake',
			image:'dan wake.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f15',
			name:'tuwo',
			image:'tuwo.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f16',
			name:'masa-waina',
			image:'masa-waina.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f17',
			name:'eva wine',
			image:'eva wine.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f18',
			name:'veleta wine',
			image:'veleta wine.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f19',
			name:'hollandia yoghurt',
			image:'hollandia yoghurt.png',
			price:'$150',
			like: false
		},
		{

			index:'f20',
			name:'chivita juice',
			image:'chivita juice.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f21',
			name:'Big Volt',
			image:'Big Volt.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f22',
			name:'sprite',
			image:'sprite.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f23',
			name:'Fanta',
			image:'Fanta.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f24',
			name:'Mirinda',
			image:'Mirinda.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f25',
			name:'cola meet coffee',
			image:'cola meet coffee.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f26',
			name:'pepsi-cola can',
			image:'pepsi-cola can.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f27',
			name:'pet bottle coke',
			image:'pet bottle coke.webp',
			price:'$150',
			like: false
		},
		{

			index:'f28',
			name:'coke can',
			image:'coke can.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f29',
			name:'Watermelon Juice, beverage',
			image:'Watermelon Juice, beverage.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f30',
			name:'Fried-rice-Vegetage-Salad-and-roasted-Chicken',
			image:'Fried-rice-Vegetage-Salad-and-roasted-Chicken.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f31',
			name:'Chicken and Shrimp Fried Rice',
			image:'Chicken and Shrimp Fried Rice.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f32',
			name:'Fish Fingers & Beans',
			image:'Fish Fingers & Beans.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f33',
			name:'Borlotti Beans with Chard',
			image:'Borlotti Beans with Chard.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f34',
			name:'baked-beans-toast-white-plate',
			image:'baked-beans-toast-white-plate.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f35',
			name:'Arroz con Pollo (Rice with Chicken)',
			image:'Arroz con Pollo (Rice with Chicken).jpeg',
			price:'$150',
			like: false
		},
		{

			index:'f36',
			name:'Jollof-rice-plantain-and-pepper-chicken',
			image:'Jollof-rice-plantain-and-pepper-chicken.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f37',
			name:'Akara-and-bread',
			image:'Akara-and-bread.jpg',
			price:'$150',
			like: false
		},
		{

			index:'f38',
			name:'Bread Moi-Moi and Akara',
			image:'Bread Moi-Moi and Akara.jpg',
			price:'$150',
			like: false
		},
	]
}

// store.shoe.forEach(a => {

// 	shoe.innerHTML = shoe.innerHTML + `
// 		<div>
//                 <img src="${a.image}">
//                 <span class="name">${a.name}</span>
//                 <span class="price">${a.price}</span>
//             </div>
// 	`

// })

function display(category) {

	if(category === 'all') {

		all.innerHTML = ""

		for(a in store){

			let x = store[a.toString()];

			all.innerHTML = all.innerHTML + `<h1 id="category">${a.toUpperCase()}</h1>`

			for(let i =  0; i < x.length; i++){
				all.innerHTML = all.innerHTML + `
					<div id="product_info">
            			<img src="./imgs/${x[i].image}">
            			<ul>
            				<li class="name">${x[i].name}</li><br>
            				<li class="price">${x[i].price}</li><br>
   			         		<li class="cart"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"/></svg></li>
   			         		${ x[i].like ? `<p class="like_btn" onclick="toggleLike('${a}','${x[i].index}',  'all')"><svg fill="red" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Heart</title><path d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z"/></svg></p>` : `<p class="like_btn" onclick="toggleLike('${a}','${x[i].index}',  'all')"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Heart</title><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg></p>` }
            			</ul>
    	    		</div>
				`
			}
		}

		return;

	}

	all.innerHTML = ` 
			<span id="category"> ${category.toUpperCase()} </span>
			<span id="num"> ${store[category].length} Products Found </span>
	`

	store[category].forEach(a => {

		all.innerHTML = all.innerHTML + `
			<div id="product_info">
            	<img src="./imgs/${a.image}">
            	<ul>
           			<li class="name">${a.name}</li><br>
        			<li class="price">${a.price}</li><br>
   			        <li class="cart"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"/></svg></li>
          			${ a.like ? `<p class="like_btn" onclick="toggleLike('${category}','${a.index}',  '${category}')"><svg fill="red" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Heart</title><path d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z"/></svg></p>` : `<p class="like_btn" onclick="toggleLike('${category}','${a.index}',  '${category}')"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Heart</title><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg></p>` }

          		</ul>
    	    </div>
		`

	})
}


let cart = {

	CartItems: [
		{
			index:0,
			name:'Nike 21',
			image:'icons8_telephone.ico',
			price:'$150'
		},

	],



	getcart() {
		return this.CartItems;
	},

	addToCart(product) {
		this.CartItems.push(product)
	}


}


function toggleLike(category, index, render) {
	for (a of store[category]) {
		if (index === a.index) {
			a.like = !a.like
			display(render)
		}
	}
}

console.log(cart.getcart())


display('all')

// for(a in store){

// let x = store[a.toString()];

// 	all.innerHTML = all.innerHTML + `<h1 id="category">${a.toUpperCase()}</h1>`

// 	for(let i =  0; i < x.length; i++){
// 		all.innerHTML = all.innerHTML + `
// 		<div>
//             	<img src="${x[i].image}">
//             	<h4 class="name">${x[i].name}</h4>
//             	<span class="price">${x[i].price}</span>
//     	    </div>
// 		`
// 	}
// }