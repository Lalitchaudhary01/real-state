export interface Product {
  id: string;
  slug: string;
  title: string;
  category: 'Cladding Panels' | 'Louvers & Pergolas' | 'Decorative & CNC' | 'Substructures';
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  features: string[];
  specs: {
    material: string;
    thickness: string;
    dimensions: string;
    finishOptions: string[];
    fireRating: string;
    warranty: string;
  };
  applications: string[];
  popularShades?: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  deliverables: string[];
  standards: string[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category: 'Residential' | 'Commercial' | 'Hospitality & Retail';
  status: 'Completed' | 'Ongoing';
  year: string;
  area: string;
  materials: string[];
  description: string;
  imageUrl: string;
  galleryImages: string[];
  client: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Exterior Cladding' | 'ACP Work' | 'HPL Work' | 'Louvers & Facades';
  imageUrl: string;
  location: string;
  material: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  projectType: string;
  content: string;
  avatarUrl: string;
}

