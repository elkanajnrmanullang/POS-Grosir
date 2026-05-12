import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart3, 
  Settings, 
  Search,
  Plus,
  Trash2,
  ChevronRight
} from "lucide-react";

export default function POSPreviewPage() {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 font-sans">
      {/* SIDEBAR MOCKUP */}
      <aside className="w-64 border-r bg-white dark:bg-slate-900 hidden md:flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold tracking-tight text-primary">POS Grosir v1</h1>
          <p className="text-xs text-muted-foreground mt-1 text-emerald-500 font-medium">Branch: Pusat Bandar Lampung</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <div className="flex items-center gap-3 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-primary font-medium">
            <ShoppingCart size={20} /> <span>Kasir (POS)</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <Package size={20} /> <span>Produk & Stok</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <Users size={20} /> <span>Membership</span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <BarChart3 size={20} /> <span>Laporan Harian</span>
          </div>
        </nav>
        <div className="p-4 border-t space-y-2">
          <div className="flex items-center gap-3 px-3 py-2 text-muted-foreground hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
            <Settings size={20} /> <span>Pengaturan</span>
          </div>
        </div>
      </aside>

      {/* MAIN POS INTERFACE MOCKUP */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* HEADER */}
        <header className="h-16 border-b bg-white dark:bg-slate-900 flex items-center justify-between px-6">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input 
              type="text" 
              placeholder="Cari SKU atau Nama Produk (F2)..." 
              className="w-full pl-10 pr-4 py-2 rounded-full border bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold">Admin Kasir</p>
              <p className="text-[10px] text-emerald-500 uppercase font-black">Online</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 border" />
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="flex-1 flex overflow-hidden">
          {/* PRODUCT GRID MOCKUP */}
          <div className="flex-1 p-6 overflow-y-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 content-start">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white dark:bg-slate-900 border rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg mb-3 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform">
                  <Package size={40} />
                </div>
                <h3 className="font-bold text-sm leading-tight mb-1">Telur Ayam Negeri (Batch {i})</h3>
                <p className="text-[10px] text-muted-foreground uppercase mb-2">Stok: 1.200 Butir</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-base">Rp 1.728</span>
                  <button className="p-1.5 bg-primary text-primary-foreground rounded-lg">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CART AREA MOCKUP */}
          <aside className="w-[400px] border-l bg-white dark:bg-slate-900 flex flex-col shadow-2xl">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <ShoppingCart size={20} /> Keranjang
                </h2>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-bold">2 Items</span>
              </div>
              <button className="w-full py-2 border-2 border-dashed rounded-lg text-sm text-muted-foreground hover:bg-slate-50 flex items-center justify-center gap-2">
                <Users size={16} /> Pilih Customer (Membership)
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <div className="flex justify-between items-start border-b pb-4">
                <div className="flex-1">
                  <h4 className="text-sm font-bold">Telur Ayam Negeri</h4>
                  <p className="text-xs text-muted-foreground">Rp 1.728 x 10</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold">Rp 17.280</p>
                  <button className="text-destructive p-1 hover:bg-destructive/10 rounded-md transition-colors">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-t space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>Rp 17.280</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Potongan Member (Gold)</span>
                <span className="text-emerald-600">- Rp 280</span>
              </div>
              <div className="flex justify-between items-end pt-2 border-t border-slate-200">
                <span className="text-base font-bold">Total Akhir</span>
                <span className="text-2xl font-black text-primary tracking-tighter">Rp 17.000</span>
              </div>
              <button className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg mt-4 shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                PROSES BAYAR (F10) <ChevronRight size={20} />
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}