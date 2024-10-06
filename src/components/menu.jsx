import Img from '../assets/jewelery.jpg';
import Menubtn from '../components/menu btn'



function Menu() {


    return (
      <div className='bg-sky-900 h-[80px] pt-4'>
      <div className="flex justify-between items-center gap-10  w-[100%]">


        <div className="w-[10%] pl-2" >
        <a href="http://localhost:5173/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={Img} class="h-8 rounded-full" alt=" Jewelery Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jewelery Store</span>
            </a>
        </div>
        <div className='flex justify-end w-[100%] text-white'> 
            <nav >
                <a className='mr-5' href="#">Home</a>
                <a className='mr-5' href="#">Accescories</a>
                <a className='mr-5' href="#">About</a>
                <a className='mr-5' href="#">Contact</a>
                <a className='mr-5' href="#">Shop</a>
            </nav>
        </div>
        <div className='w-[20%] flex justify-center'>
          <a href="">
            <Menubtn/>
          </a>
            
        </div>
      </div>
        
      </div>
    )
  }
  
  export default Menu