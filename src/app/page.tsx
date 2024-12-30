
import Header from "@/components/header";
import Footer from "@/components/footer";
import Herosection from "@/components/herosection";
import Ceremics from "@/components/ceremics";
import Product from "@/components/product";
import Service from "@/components/service";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="p-14">
      <Header/>
      < Herosection/>
      < Ceremics/>
      < Services/>
      < Service/>
      < Product/>
     < Footer/> 
    </div>
  );
}
