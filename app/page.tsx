import Image from "next/image";
import Link from "next/link";
import Header from "@/components/shared/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-zinc-50 pb-32 pt-20 sm:pt-32 lg:pb-40 lg:pt-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-zinc-900 sm:text-7xl">
              Your <span className="text-blue-600">Menzil</span> in Algeria is just a click away.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              The most trusted real estate marketplace to buy, rent, or sell properties across Algeria. From Algiers to Oran, find your dream home today.
            </p>

            {/* Search Bar */}
            <div className="mx-auto mt-12 max-w-5xl rounded-2xl bg-white p-2 shadow-xl ring-1 ring-zinc-900/5 sm:rounded-full">
              <form className="flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-zinc-100">
                <div className="flex w-full items-center gap-3 px-6 py-4 sm:w-1/3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-50">
                    <Image src="/images/mmb90ocl-m8ds0i6.svg" alt="Location" width={20} height={20} className="text-blue-600" />
                  </div>
                  <input
                    type="text"
                    placeholder="Location (e.g. Hydra, Oran...)"
                    className="w-full border-0 bg-transparent p-0 text-zinc-900 placeholder:text-zinc-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="flex w-full items-center gap-3 px-6 py-4 sm:w-1/4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-50">
                    <Image src="/images/mmb90ocm-i8vdvdq.svg" alt="Type" width={20} height={20} />
                  </div>
                  <select className="w-full border-0 bg-transparent p-0 text-zinc-900 focus:ring-0 sm:text-sm sm:leading-6 appearance-none cursor-pointer">
                    <option>Property Type</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Studio</option>
                  </select>
                </div>
                <div className="flex w-full items-center gap-3 px-6 py-4 sm:w-1/4">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-50">
                    <Image src="/images/mmb90ocm-tllla4r.svg" alt="Price" width={20} height={20} />
                  </div>
                  <input
                    type="number"
                    placeholder="Max Price (DA)"
                    className="w-full border-0 bg-transparent p-0 text-zinc-900 placeholder:text-zinc-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="p-2 w-full sm:w-auto">
                  <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors sm:w-auto">
                    <Image src="/images/mmb90ocm-o8ka6yb.svg" alt="Search" width={16} height={16} className="invert brightness-0" />
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Featured Listings</h2>
                <p className="mt-4 text-lg text-zinc-600">Discover handpicked properties in the most popular neighborhoods.</p>
              </div>
              <Link href="#" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500">
                View all listings
                <Image src="/images/mmb90ocm-gco1687.svg" alt="Arrow" width={16} height={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl ring-1 ring-zinc-900/5">
                <div className="relative h-64 w-full overflow-hidden bg-zinc-200">
                  <Image 
                    src="/images/mmb90oe0-it4vzk7.png" 
                    alt="Modern Apartment" 
                    fill 
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">FOR RENT</div>
                  <button className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white">
                    <Image src="/images/mmb90ocm-7x2xhwy.svg" alt="Like" width={16} height={16} />
                  </button>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900">Modern Apartment</h3>
                      <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
                        <Image src="/images/mmb90ocm-xnh2hxn.svg" alt="Pin" width={14} height={14} />
                        Cheraga, Algiers
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">80,000 DA</p>
                      <p className="text-xs text-zinc-500">/mo</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <Image src="/images/mmb90ocm-82u9fbn.svg" alt="Bed" width={18} height={18} />
                      2 Beds
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <Image src="/images/mmb90ocm-wx669uh.svg" alt="Area" width={18} height={18} />
                      95m²
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <Image src="/images/mmb90ocm-329x3nu.svg" alt="Bath" width={18} height={18} />
                      1 Bath
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl ring-1 ring-zinc-900/5">
                <div className="relative h-64 w-full overflow-hidden bg-zinc-200">
                  <Image 
                    src="/images/mmb90odz-wr69e9k.png" 
                    alt="Cozy Studio" 
                    fill 
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">FOR SALE</div>
                  <button className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white">
                    <Image src="/images/mmb90ocn-zeq9kac.svg" alt="Like" width={16} height={16} />
                  </button>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900">Cozy Studio</h3>
                      <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
                        <Image src="/images/mmb90ocm-xnh2hxn.svg" alt="Pin" width={14} height={14} />
                        Bab Ezzouar, Algiers
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">55,000 DA</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <Image src="/images/mmb90ocm-82u9fbn.svg" alt="Bed" width={18} height={18} />
                      1 Bed
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <Image src="/images/mmb90ocm-wx669uh.svg" alt="Area" width={18} height={18} />
                      45m²
                    </div>
                    <div className="w-12"></div> {/* Spacer to align grid */}
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl ring-1 ring-zinc-900/5">
                <div className="relative h-64 w-full overflow-hidden bg-zinc-200">
                  <Image 
                    src="/images/mmb90oe0-pd1c7af.png" 
                    alt="Downtown Loft" 
                    fill 
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* No label in design, but consistent layout */}
                  <button className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white">
                    <Image src="/images/mmb90ocn-zeq9kac.svg" alt="Like" width={16} height={16} />
                  </button>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-900">Downtown Loft</h3>
                      <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
                        <Image src="/images/mmb90ocm-xnh2hxn.svg" alt="Pin" width={14} height={14} />
                        Alger Centre
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">120,000 DA</p>
                      <p className="text-xs text-zinc-500">/mo</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <Image src="/images/mmb90ocm-82u9fbn.svg" alt="Bed" width={18} height={18} />
                      2 Beds
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <Image src="/images/mmb90ocm-wx669uh.svg" alt="Area" width={18} height={18} />
                      80m²
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <Image src="/images/mmb90ocm-329x3nu.svg" alt="Bath" width={18} height={18} />
                      2 Baths
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center sm:hidden">
              <Link href="#" className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500">
                View all listings
                <Image src="/images/mmb90ocm-gco1687.svg" alt="Arrow" width={16} height={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Promo Section */}
        <section className="bg-white pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Promo 1 */}
              <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-6 pb-24 pt-16 shadow-2xl sm:px-16 lg:px-24">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Find your next home</h3>
                  <p className="mt-6 max-w-lg text-lg text-blue-100">
                    Browse thousands of listings and connect with verified sellers today.
                  </p>
                  <div className="mt-10">
                    <Link href="#" className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors">
                      Browse Marketplace
                    </Link>
                  </div>
                </div>
                <Image 
                  src="/images/mmb90ocn-7kgpcun.svg" 
                  alt="House" 
                  width={400} 
                  height={400}
                  className="absolute -bottom-24 -right-24 h-96 w-96 opacity-20"
                />
              </div>

              {/* Promo 2 */}
              <div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-6 pb-24 pt-16 shadow-2xl sm:px-16 lg:px-24">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Are you a host?</h3>
                  <p className="mt-6 max-w-lg text-lg text-zinc-300">
                    List your property for free and reach millions of potential buyers across the country.
                  </p>
                  <div className="mt-10">
                    <Link href="#" className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">
                      List your Property
                    </Link>
                  </div>
                </div>
                <Image 
                  src="/images/mmb90ocn-xvjz285.svg" 
                  alt="Host" 
                  width={400} 
                  height={400}
                  className="absolute -bottom-24 -right-24 h-96 w-96 opacity-20"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-100" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Image
                src="/images/mmb90oe0-xdmglma.png"
                alt="Menzeli Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <p className="text-sm leading-6 text-zinc-600 max-w-sm">
                The #1 real estate marketplace in Algeria. We simplify the way people buy, rent, and sell properties through transparency and technology.
              </p>
              <div className="flex space-x-6">
                <Link href="#" className="text-zinc-400 hover:text-zinc-500">
                  <span className="sr-only">Facebook</span>
                  <Image src="/images/mmb90ocn-r00v4zn.svg" alt="Facebook" width={24} height={24} className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-zinc-500">
                  <span className="sr-only">Instagram</span>
                  <Image src="/images/mmb90oco-qqdo8jo.svg" alt="Instagram" width={24} height={24} className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-zinc-500">
                  <span className="sr-only">Twitter</span>
                  <Image src="/images/mmb90oco-hy1xutr.svg" alt="Twitter" width={24} height={24} className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-zinc-900">Explore</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><Link href="#" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900">All Listings</Link></li>
                    <li><Link href="#" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900">Apartments in Algiers</Link></li>
                    <li><Link href="#" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900">Villas in Oran</Link></li>
                    <li><Link href="#" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900">Studios for Rent</Link></li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-zinc-900">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><Link href="#" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900">About Us</Link></li>
                    <li><Link href="#" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900">Careers</Link></li>
                    <li><Link href="#" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900">Terms of Service</Link></li>
                    <li><Link href="#" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-zinc-900">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><Link href="#" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900">Help Center</Link></li>
                    <li><Link href="#" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900">Contact Support</Link></li>
                    <li><Link href="#" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900">Safety Guide</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-zinc-900/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs leading-5 text-zinc-500">&copy; 2024 Menzeli Real Estate. Made with ❤️ in Algeria.</p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
                <Image src="/images/mmb90oco-t8dm4mb.svg" alt="Global" width={16} height={16} />
                English (US)
              </button>
              <button className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
                <Image src="/images/mmb90oco-9ny32f9.svg" alt="Currency" width={16} height={16} />
                DZD (DA)
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
