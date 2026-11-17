import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import { ShieldCheck, CheckCircle2, ArrowRight, MessageCircle, Layers, ArrowLeft } from "lucide-react";
import ProductDetailActions from "./ProductDetailActions";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.title} | Aura Architectural Exteriors`,
    description: product.shortDesc,
    openGraph: {
      title: product.title,
      description: product.shortDesc,
      images: [{ url: product.imageUrl }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.category === "Cladding Panels")
  ).slice(0, 3);

  return (
    <div className="bg-[#FBF9F5] text-[#202020] min-h-screen">
      {/* Breadcrumb strip */}
      <div className="bg-white border-b border-[#E9E7E2] py-3 px-4 sm:px-8 text-xs text-[#202020]/60">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-[#B79A72] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#B79A72] transition-colors">Products</Link>
          <span>/</span>
          <span className="text-[#202020] font-medium truncate">{product.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#B79A72] font-semibold mb-6 hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Product Catalogue</span>
        </Link>

        {/* Product Overview Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Product Imagery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative w-full h-80 sm:h-[460px] rounded-2xl overflow-hidden shadow-xl border border-[#E9E7E2] bg-black">
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 bg-[#141414]/85 backdrop-blur-sm text-[#B79A72] border border-[#B79A72]/30 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                {product.category}
              </div>
            </div>

            {/* Popular Shade swatches if available */}
            {product.popularShades && product.popularShades.length > 0 && (
              <div className="p-4 bg-white rounded-xl border border-[#E9E7E2]">
                <span className="text-xs uppercase tracking-wider text-[#B79A72] font-semibold block mb-2">
                  Popular Architectural Shades & Textures:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.popularShades.map((shade, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#F7F5F0] text-[#202020] text-xs rounded-full border border-[#E9E7E2]"
                    >
                      {shade}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Product Details & Specs */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold">
                Product Specification
              </span>
              <h1 className="text-2xl sm:text-4xl font-serif text-[#202020] font-normal mt-1 leading-tight">
                {product.title}
              </h1>
              <p className="text-sm sm:text-base text-[#202020]/80 mt-3 font-light leading-relaxed">
                {product.fullDesc}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[#202020] font-semibold mb-3">
                Key Performance Advantages
              </h3>
              <div className="space-y-2">
                {product.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#202020]/80">
                    <CheckCircle2 className="w-4 h-4 text-[#B79A72] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client-side Action Buttons */}
            <ProductDetailActions productTitle={product.title} />

            {/* Technical Specifications Grid */}
            <div className="bg-white p-6 rounded-xl border border-[#E9E7E2] shadow-sm space-y-3">
              <h3 className="text-sm font-serif text-[#202020] font-medium border-b border-[#E9E7E2] pb-2 flex items-center justify-between">
                <span>Technical Specifications Data</span>
                <ShieldCheck className="w-4 h-4 text-[#B79A72]" />
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-[#B79A72] uppercase font-semibold block">Core Material</span>
                  <span className="font-medium text-[#202020]">{product.specs.material}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#B79A72] uppercase font-semibold block">Thickness Options</span>
                  <span className="font-medium text-[#202020]">{product.specs.thickness}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#B79A72] uppercase font-semibold block">Standard Dimensions</span>
                  <span className="font-medium text-[#202020]">{product.specs.dimensions}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#B79A72] uppercase font-semibold block">Fire Classification</span>
                  <span className="font-medium text-[#202020]">{product.specs.fireRating}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-[10px] text-[#B79A72] uppercase font-semibold block">Warranty Coverage</span>
                  <span className="font-medium text-[#202020]">{product.specs.warranty}</span>
                </div>
              </div>
            </div>

            {/* Applications List */}
            <div>
              <span className="text-xs uppercase tracking-wider text-[#202020] font-semibold block mb-2">
                Recommended Applications:
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {product.applications.map((app, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white text-[#202020]/80 rounded border border-[#E9E7E2]"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 pt-12 border-t border-[#E9E7E2]">
          <h2 className="text-2xl font-serif text-[#202020] mb-8">
            Complementary Architectural Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div key={rel.id} className="bg-white p-5 rounded-xl border border-[#E9E7E2] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="relative h-44 rounded-lg overflow-hidden mb-4 bg-black">
                    <Image src={rel.imageUrl} alt={rel.title} fill className="object-cover" />
                  </div>
                  <h4 className="font-serif text-lg text-[#202020] line-clamp-1">{rel.title}</h4>
                  <p className="text-xs text-[#202020]/70 mt-1 line-clamp-2">{rel.shortDesc}</p>
                </div>
                <Link
                  href={`/products/${rel.slug}`}
                  className="mt-4 pt-3 border-t border-[#E9E7E2] text-xs font-semibold text-[#B79A72] flex items-center justify-between hover:underline"
                >
                  <span>Explore Product</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

