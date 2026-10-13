/* ===== EDIT ME: images and content =====
   To use your own photos, copy them into assets/images/ with the file names below
   (or change the names here). If a file is missing, a placeholder illustration shows instead. */
const SITE={
  // Home page banner: 4 background images you change by hand with the arrows or dots.
  heroAutoplay:0, // seconds between automatic slides; 0 = no automatic change
  hero:[
    {img:'assets/images/hero-1.jpg',title:'Explore the hidden Mirissa with Rev Cycling'}
    // Add more banner slides by copying the line above (a comma after each), e.g.
    // ,{img:'assets/images/hero-2.jpg',title:'Paddy & Tea Trail'}
  ],
  // Tour cards (Home and Activities pages). The first three also show on Home.
  tours:[
    {img:'assets/images/tour-1.jpg',fb:'sunrise',name:'Sunrise Coast Ride',meta:'25 km · Easy · 3 hrs',text:'Roll out before the heat and follow the coast road to Weligama with a beach breakfast.',price:'$45'},
    {img:'assets/images/tour-2.jpg',fb:'paddy',name:'Paddy & Tea Trail',meta:'40 km · Moderate · 5 hrs',text:'Quiet inland lanes through rice fields, a spice garden and a tea tasting.',price:'$65'},
    {img:'assets/images/tour-3.jpg',fb:'sunset',name:'Sunset Beach Cruise',meta:'18 km · Easy · 2.5 hrs',text:'A relaxed evening loop ending with fresh seafood on the sand.',price:'$40'},
    {img:'assets/images/tour-4.jpg',fb:'hills',name:'Hill Country Challenge',meta:'65 km · Hard · 7 hrs',text:'For strong riders: climbs, jungle views and a waterfall swim.',price:'$95'}
  ],
  // Blog posts at the bottom of Home
  blog:[
    {img:'assets/images/blog-1.jpg',fb:'sunrise',tag:'Routes',date:'12 Oct 2026',title:'Five quiet roads to ride around Mirissa',excerpt:'Our guides share the lanes that tourists rarely find, from lagoon paths to temple back roads.'},
    {img:'assets/images/blog-2.jpg',fb:'paddy',tag:'Tips',date:'28 Sep 2026',title:'What to pack for a coastal cycling day',excerpt:'Sun, sweat and sudden showers: a simple checklist so you can just enjoy the ride.'},
    {img:'assets/images/blog-3.jpg',fb:'sunset',tag:'Guides',date:'9 Sep 2026',title:'Your first guided ride: what to expect',excerpt:'From bike fitting to the first tea stop, here is how a typical Rev Cycling day unfolds.'}
  ],
  aboutBanner:'assets/images/about-banner.jpg', // About us page banner (wide photo)
  aboutHome:'assets/images/about-home.jpg', // About section on Home (portrait photo works best)
  about:'assets/images/about.jpg',      // About us page photo
  stories:'assets/images/stories.jpg',  // Guest stories section photo
  team:[
    {name:'Nuwan',role:'Founder & lead guide',img:'assets/images/team-1.jpg'},
    {name:'Dilini',role:'Tour coordinator',img:'assets/images/team-2.jpg'},
    {name:'Kasun',role:'Mechanic & guide',img:'assets/images/team-3.jpg'}
  ]
};
