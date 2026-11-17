import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    slug: "acp-sheets",
    title: "ACP Sheets (Aluminium Composite Panels)",
    category: "Cladding Panels",
    shortDesc: "High-grade PVDF coated fire-retardant aluminium composite panels for contemporary building elevations and corporate towers.",
    fullDesc: "Our architectural Aluminium Composite Panels (ACP) are engineered with twin high-tensile aluminium sheets bonded to a non-combustible mineral core. Treated with high-durability Kynar 500 PVDF resins, they withstand extreme UV degradation, urban pollution, and monsoon moisture with zero color fade over decades.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Class-A2 / B1 Fire-Retardant Core available",
      "Kynar 500 / Hylar 5000 PVDF triple-coat surface",
      "Concealed bracket installation system",
      "High wind-load structural resistance",
      "Superior flatness and anti-delamination warranty"
    ],
    specs: {
      material: "Grade 3003/5005 Aluminium Alloy with Mineral/LDPE Core",
      thickness: "3.0mm, 4.0mm, 6.0mm (Skin: 0.25mm to 0.50mm)",
      dimensions: "1220 x 2440 mm, 1220 x 3050 mm, 1220 x 3660 mm (Custom up to 6000mm)",
      finishOptions: ["Metallic Silver", "Champagne Gold", "Matte Charcoal", "Brushed Bronze", "Carbon Black"],
      fireRating: "ASTM E84 Class A & EN 13501-1 Class A2-s1,d0",
      warranty: "15-Year Exterior Color & Integrity Warranty"
    },
    applications: [
      "Commercial High-Rise Facades",
      "Airport & Transit Hub Cladding",
      "Corporate Headquarters Elevations",
      "Retail Showroom Portals & Fascias"
    ],
    popularShades: ["Champagne Gold Metallic", "Titanium Grey", "Anthracite Matte", "Copper Brushed"]
  },
  {
    id: "prod-2",
    slug: "hpl-sheets",
    title: "HPL Sheets (High Pressure Laminates)",
    category: "Cladding Panels",
    shortDesc: "Engineered solid-core exterior grade panels delivering exceptional impact strength, UV protection, and modern aesthetic elegance.",
    fullDesc: "Manufactured under intense 9 MPa hydraulic pressure and 150°C curing, our HPL exterior cladding panels incorporate a proprietary electron-beam cured (EBC) acrylic polyurethane topcoat. This impenetrable protective layer locks out graffiti, acid rain, scratches, and severe solar irradiation.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Electron Beam Cured (EBC) anti-weathering surface",
      "Self-supporting high tensile flexural strength",
      "Graffiti-resistant and non-porous dirt-repellent",
      "Thermal shock resistance from -40°C to +80°C",
      "Non-corrosive ventilated rainscreen system compatibility"
    ],
    specs: {
      material: "Thermosetting Phenolic Resin & Kraft Cellulose Fiber Core",
      thickness: "6.0mm, 8.0mm, 10.0mm, 12.0mm",
      dimensions: "1220 x 2440 mm, 1300 x 3050 mm, 1860 x 4100 mm",
      finishOptions: ["Natural Woodgrains", "Stone Textures", "Solid Monochromes", "Oxidized Rust"],
      fireRating: "EN 13501-1 Class B-s1,d0 & ASTM E84 Class B",
      warranty: "12-Year Performance & Color Fastness Warranty"
    },
    applications: [
      "Luxury Villa Exterior Elevations",
      "Ventilated Rain-Screen Facades",
      "Balcony Balustrade Infill & Soffits",
      "Hospitality Resort Frontages"
    ],
    popularShades: ["Smoked Oak", "Nordic Ash", "Corten Rust", "Basalt Grey"]
  },
  {
    id: "prod-3",
    slug: "exterior-grade-hpl",
    title: "High Pressure Laminates (Exterior Grade)",
    category: "Cladding Panels",
    shortDesc: "Heavy-duty exterior architectural grade laminates specifically formulated for intense tropical sun and coastal exposure.",
    fullDesc: "Designed for premium developments demanding maximum structural endurance, our Exterior Grade High Pressure Laminates undergo rigorous accelerated weathering tests (EN 438-6). The panels feature a dual-sided balanced thermoset core to ensure permanent dimensional stability with zero cupping or warping.",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Certified EN 438-6 Exterior Weathering Compliance",
      "Double-hardened acrylic polyurethane shield",
      "Zero delamination under high humidity and rainfall",
      "Color-matched exterior blind rivet fastening",
      "Optimal thermal insulation barrier when coupled with rockwool"
    ],
    specs: {
      material: "High-Density Phenolic Compact Laminate",
      thickness: "6.0mm, 8.0mm, 10.0mm",
      dimensions: "1220 x 2440 mm, 1300 x 2800 mm",
      finishOptions: ["Satin Silk", "Deep Pore Timber", "Matte Architectural", "Fine Sandstone"],
      fireRating: "Class 1 / Class A Fire Retardant Options",
      warranty: "15-Year Weatherproof Guarantee"
    },
    applications: [
      "Bespoke Residential Envelopes",
      "Institutional Building Facades",
      "Luxury Penthouse Terraces",
      "High-Traffic Commercial Plazas"
    ],
    popularShades: ["Walnut Heritage", "Desert Sandstone", "Ebony Timber", "Silver Birch"]
  },
  {
    id: "prod-4",
    slug: "aluminium-louvers",
    title: "Aluminium Louvers (Aerodynamic & Architectural)",
    category: "Louvers & Pergolas",
    shortDesc: "Precision-extruded architectural aluminium louvers providing solar shading, controlled airflow, and striking linear facades.",
    fullDesc: "Our architectural aluminium louvers are engineered using high-tensile 6063-T6 alloy. Available in airfoil, elliptical, box, and z-blade geometries, these louvers can be installed as fixed solar screens or integrated with automated building management systems (BMS) for dynamic sun-tracking shading.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Structural 6063-T6 Architectural Grade Aluminium Alloy",
      "Qualicoat-certified powder coating or anodized finishes",
      "Calculated aerodynamic drag and wind-shedding design",
      "Drastic reduction in solar thermal gain (up to 42%)",
      "Continuous concealed carrier bracket system"
    ],
    specs: {
      material: "Extruded Aluminium 6063-T6",
      thickness: "1.8mm to 3.0mm wall thickness",
      dimensions: "Blade widths: 50mm, 100mm, 150mm, 200mm, 300mm (Lengths up to 6500mm)",
      finishOptions: ["Matte Black", "Champagne Anodized", "Dark Bronze Anodized", "Timber Wood Finish Sublimation"],
      fireRating: "Non-combustible (A1 Classification)",
      warranty: "20-Year Extrusion & Finish Warranty"
    },
    applications: [
      "Solar Shading Screens & Brise-Soleil",
      "HVAC & Mechanical Equipment Enclosures",
      "Multilevel Parking Garage Screens",
      "Architectural Feature Elevations"
    ],
    popularShades: ["Champagne Bronze", "Jet Black Matte", "Architectural Timber", "Deep Charcoal"]
  },
  {
    id: "prod-5",
    slug: "wooden-hpl-cladding",
    title: "Wooden HPL Cladding",
    category: "Cladding Panels",
    shortDesc: "The warmth and timeless elegance of organic hardwood married with zero-maintenance, weather-defying phenolic technology.",
    fullDesc: "Wooden HPL Cladding delivers the rich grains, deep warmth, and tactile authentic feel of premium Teak, Oak, Walnut, and Ipe woods without the maintenance headaches of natural timber. No polishing, varnishing, or termite treatments are ever required, making it the premier choice for luxury bungalows and contemporary estates.",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Hyper-realistic architectural woodgrain textures",
      "100% termite proof, borer proof, and rot-free",
      "Zero swelling or contraction under heavy monsoon downpours",
      "No recurring varnishing, painting, or oiling necessary",
      "Concealed sub-frame fixing creates crisp, modern shadow lines"
    ],
    specs: {
      material: "Phenolic Resin Core with UV-Stabilized Woodgrain Film",
      thickness: "6.0mm, 8.0mm",
      dimensions: "1220 x 2440 mm, 1300 x 3050 mm",
      finishOptions: ["Burmese Teak", "American Walnut", "Smoked Oak", "Brazilian Ipe", "Golden Cypress"],
      fireRating: "Class B-s1,d0 Fire-Retardant Certified",
      warranty: "12-Year Color Fastness & Surface Integrity Guarantee"
    },
    applications: [
      "Modern Farmhouse & Villa Facades",
      "Luxury Cantilevered Soffits & Overhangs",
      "Main Entrance Gateways & Porticos",
      "Boutique Hotel Exterior Walls"
    ],
    popularShades: ["Burmese Teak", "Smoked Oak", "American Walnut", "Rustic Redwood"]
  },
  {
    id: "prod-6",
    slug: "exterior-wpc-louvers",
    title: "Exterior WPC Louvers (Fluted Elevation Profiles)",
    category: "Louvers & Pergolas",
    shortDesc: "Architectural Wood-Plastic Composite fluted louvers offering deep shadow definition, acoustic dampening, and weather endurance.",
    fullDesc: "Engineered from a precision co-extruded composite of 60% reclaimed hardwood fiber, 30% high-density polymers, and 10% eco-stabilizers. Our Exterior WPC Louvers provide an ultra-durable 360-degree protective cap layer that shields the core against moisture infiltration, fungal decay, and UV fading.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "360-degree co-extruded protective shield (ShieldPlus Tech)",
      "Zero moisture absorption, anti-splinter and anti-crack",
      "Deep fluted profile creates striking vertical shadow play",
      "Tongue-and-groove interlock for rapid, secure installation",
      "100% Recyclable and eco-friendly composition"
    ],
    specs: {
      material: "Wood Plastic Composite (60% Wood Fiber, 30% HDPE, 10% Additives)",
      thickness: "Overall depth: 25mm to 60mm; Profile width: 120mm to 200mm",
      dimensions: "Lengths: 2900mm standard (Custom up to 4000mm)",
      finishOptions: ["Teak Gold", "Charcoal Slate", "Dark Chocolate", "Silver Grey", "Espresso Wood"],
      fireRating: "Class B2 / Self-Extinguishing",
      warranty: "10-Year Anti-Rot & Color Guarantee"
    },
    applications: [
      "Balcony Feature Walls & Privacy Partitions",
      "Exterior Elevation Fluted Panels",
      "Boundary Wall Cladding & Main Entrances",
      "Penthouse Garden Terrace Screening"
    ],
    popularShades: ["Teak Gold", "Charcoal Slate", "Chocolate Walnut", "Driftwood Grey"]
  },
  {
    id: "prod-7",
    slug: "marble-hpl-sheets",
    title: "Marble HPL Sheets (Stone Texture Facades)",
    category: "Cladding Panels",
    shortDesc: "The monumental prestige of Italian Statuario and Travertine marble at 1/10th the weight and effortless concealed dry fixing.",
    fullDesc: "Achieve the regal visual grandeur of genuine mined marble without the massive structural dead loads, efflorescence, water staining, and delicate anchoring of natural stone slabs. Our Marble HPL panels capture realistic continuous marble veining in high-definition matte and honed textures.",
    imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Statuary marble, Calacatta, and Travertine realistic veins",
      "Over 85% lighter than natural 20mm granite/marble slabs",
      "Impervious to acid rain, urban pollutants, and efflorescence",
      "Dry-cladding system eliminates heavy wet-mortar installations",
      "Large-format sheets minimize visible joints for monolithic elegance"
    ],
    specs: {
      material: "Heavy-Duty Exterior Phenolic Core with Stone Finish Decors",
      thickness: "6.0mm, 8.0mm, 10.0mm",
      dimensions: "1220 x 2440 mm, 1300 x 3050 mm",
      finishOptions: ["Statuario White Honed", "Nero Marquina Black", "Travertine Beige", "Carrara Cloud", "Armani Grey"],
      fireRating: "Class B-s1,d0 Certified",
      warranty: "15-Year Weather & Structural Guarantee"
    },
    applications: [
      "Luxury Real Estate Portals & Double-Height Entrances",
      "Commercial Tower Podium Cladding",
      "Bespoke Boundary Elevations & Feature Pylons",
      "High-End Penthouse Living Overhangs"
    ],
    popularShades: ["Statuario White", "Nero Marquina", "Classic Travertine", "Armani Silk"]
  },
  {
    id: "prod-8",
    slug: "aluminium-sections",
    title: "Aluminium Sections & Sub-Framing Systems",
    category: "Substructures",
    shortDesc: "Heavy-duty structural extruded aluminium T-sections, C-channels, and brackets engineered for extreme wind shear resistance.",
    fullDesc: "The unseen skeleton behind every world-class ventilated facade. Our structural aluminium sub-framing systems are precision-extruded from architectural 6063-T6 alloy. Specially designed slotted bracket connections accommodate thermal expansion and structural building movement while anchoring panels securely.",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Engineered structural alloy 6063-T6 / 6082-T6",
      "High wind-load calculations tailored to city and building height",
      "Thermal-break bracket isolators prevent thermal bridging",
      "Slotted holes allow 3D micro-adjustments for perfect laser alignment",
      "Anti-corrosive stainless steel 304/316 fastening accessories"
    ],
    specs: {
      material: "Architectural Grade Extruded Aluminium Alloy",
      thickness: "2.0mm to 3.5mm structural profile thickness",
      dimensions: "T-Sections: 50x50mm, 70x50mm, 100x50mm; L-Angles: 50x50mm; C-Channels: 40x20mm",
      finishOptions: ["Mill Finish", "Black Anodized", "Corrosion-Resistant Chromate"],
      fireRating: "A1 Non-Combustible",
      warranty: "25-Year Structural Sub-Frame Warranty"
    },
    applications: [
      "Rainscreen Substructure for HPL & ACP",
      "Suspended Louver Structural Support Grid",
      "Heavy Stone & Ceramic Facade Framework",
      "Curtain Wall & Architectural Fins Anchoring"
    ],
    popularShades: ["Standard Mill", "Black Anodized", "Structural Grey"]
  },
  {
    id: "prod-9",
    slug: "wpc-jali",
    title: "WPC Jali (Architectural Decorative Screens)",
    category: "Decorative & CNC",
    shortDesc: "Intricate laser and CNC routed Wood-Plastic Composite privacy screens for heritage-modern architectural expressions.",
    fullDesc: "Combining traditional architectural lattice traditions with space-age composite materials, our WPC Jalis offer delicate decorative patterns that never rot, crack, or warp. Ideal for external ventilation screens, balcony railings, stairwell elevations, and solar light-filtering partitions.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Bespoke CNC routing with micron-level precision",
      "100% waterproof and moisture resistant in extreme weather",
      "Customizable perforation ratios for solar control & privacy",
      "Ready to install with concealed perimeter frame channels",
      "Eco-friendly composition utilizing recycled cellulose"
    ],
    specs: {
      material: "High-Density Wood-Plastic Composite Solid Core",
      thickness: "12mm, 18mm, 25mm, 30mm",
      dimensions: "Custom sheets up to 1220 x 2440 mm per panel (Modular interlocking)",
      finishOptions: ["Raw White (Paintable)", "Solid Teak", "Matte Charcoal", "Golden Oak", "Stone Grey"],
      fireRating: "Self-Extinguishing Flame Retardant",
      warranty: "10-Year Replacement Guarantee"
    },
    applications: [
      "Balcony Privacy Screens & Railing Jalis",
      "Courtyard & Shaft Ventilation Enclosures",
      "Mandir & Meditation Pavilion Cladding",
      "Exterior Facade Accent Grilles"
    ],
    popularShades: ["Modern Geometric", "Islamic Lattice", "Parametric Wave", "Linear Horizontal"]
  },
  {
    id: "prod-10",
    slug: "wooden-pergolas",
    title: "Wooden Pergolas (Exterior HPL & WPC)",
    category: "Louvers & Pergolas",
    shortDesc: "Architectural open-air pavilions and cantilevered terrace pergolas providing luxury shade and alfresco living environments.",
    fullDesc: "Transform terraces, pool decks, entrance gates, and rooftop gardens into private luxury sanctuaries. Our pergolas utilize reinforced aluminium steel sub-cores wrapped with exterior-grade HPL or thick-wall WPC timbers, guaranteeing rock-solid structural stability that never sags, fades, or rots.",
    imageUrl: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Aluminium/steel internal structural reinforcement prevents sagging",
      "Zero maintenance – never requires annual staining or waterproofing",
      "Integrated concealed conduit for ambient LED strip lighting",
      "Optional motorized rain-sensor louvers or glass canopy integration",
      "Engineered foundation shoe brackets for invisible anchoring"
    ],
    specs: {
      material: "Heavy-Gauge Internal Structural Core with Exterior HPL/WPC Cladding",
      thickness: "Rafter sizes: 100x50mm, 150x50mm, 200x50mm; Columns: 150x150mm, 200x200mm",
      dimensions: "Custom designed spans up to 6.5 meters clear span",
      finishOptions: ["Dark Teak", "Natural Walnut", "Charcoal Bronze", "Nordic Birch"],
      fireRating: "Class B-s1,d0 Compliant",
      warranty: "15-Year Structural & Aesthetic Warranty"
    },
    applications: [
      "Luxury Villa Rooftop Penthouses",
      "Swimming Pool Cabanas & Decks",
      "Grand Residential Porticos & Driveways",
      "Restaurant & Club Outdoor Terraces"
    ],
    popularShades: ["Rich Teak", "Charcoal Espresso", "Smoked Oak", "Weathered Pine"]
  },
  {
    id: "prod-11",
    slug: "cnc-designed-panels",
    title: "CNC Designed Panels (Parametric Architectural Facades)",
    category: "Decorative & CNC",
    shortDesc: "Custom computer numerical controlled perforated panels in HPL and ACP for statement architectural building elevations.",
    fullDesc: "Elevate buildings from functional structures into celebrated architectural landmarks. Our high-precision 5-axis CNC routing systems translate complex CAD blueprints, parametric algorithms, and bespoke artistic visions into flawlessly executed panels in exterior HPL and aluminium composite substrates.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "5-Axis CNC Milling accuracy down to ±0.2mm tolerance",
      "Parametric perforation patterns tuned for solar daylight control",
      "Backlit facade capability using integrated exterior IP67 LEDs",
      "Reinforced panel borders to maintain rigorous structural integrity",
      "Turnkey shop-drawing generation and 3D mockups"
    ],
    specs: {
      material: "Solid Exterior HPL (8mm/10mm) or Architectural ACP (4mm/6mm)",
      thickness: "4mm, 6mm, 8mm, 10mm, 12mm",
      dimensions: "Standard: 1220 x 2440 mm, 1220 x 3050 mm (Modular multi-panel designs)",
      finishOptions: ["Metallic Bronze", "Champagne Gold", "Anodized Black", "Solid White", "Smoked Woodgrain"],
      fireRating: "Class A & Class B Options Available",
      warranty: "12-Year Material & Cut-Edge Guarantee"
    },
    applications: [
      "Parametric Building Facade Envelopes",
      "Signature Brand Headquarters Portals",
      "Backlit Nighttime Architectural Features",
      "Airport & Luxury Mall Atrium Facings"
    ],
    popularShades: ["Parametric Hexagon", "Biophilic Foliage", "Abstract Gradient Perforation", "Geometric Arabic Motif"]
  }
];

