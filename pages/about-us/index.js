import MainLayout from "../../Components/MainLayout/MainLayout";

export default function AboutUs() {
  return (
    <MainLayout>
      <div className="">
        <div className="relative h-60 bg-fixed bg-[url('https://images.squarespace-cdn.com/content/v1/5a983dee45776ed3e63d5f04/1665084411190-M39CTJI658E9JTSBH9C7/4+dorm.jpg')] bg-no-repeat bg-cover bg-bottom">
          <div className="bg-gray-800 h-full w-full opacity-80 "></div>
          <h1 className="absolute left-1/2 top-1/2 text-4xl font-bold text-white -translate-x-1/2 -translate-y-1/2">
            About Us
          </h1>
        </div>
        <div className="text-center h-screen flex flex-col justify-center items-center">
          <h1 className="text-6xl text-orange-500 font-bold pb-20">
            Super Hostel
          </h1>
          <p className="text-gray-300 w-3/4 md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque id
            aperiam harum ducimus facere. Nostrum dolor, placeat voluptate ex
            exercitationem aspernatur iusto eius blanditiis illo minus,
            accusantium quisquam fugit mollitia. Expedita quia a mollitia
            consequuntur dolores impedit aliquid voluptatem assumenda ipsa
            magnam minima molestias eos, officia nesciunt eligendi rerum
          </p>
          <br />
          <p className="text-gray-300 w-3/4 md:w-1/2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            hic ipsum harum ipsa, reprehenderit distinctio dolor beatae modi
            enim aut blanditiis saepe pariatur, aspernatur eum! Itaque
            aspernatur necessitatibus, perspiciatis similique rem, optio
            veritatis libero fugiat placeat deserunt nobis, adipisci quibusdam!
          </p>
          <div className="bg-orange-500 p-5 rounded-full aspect-square text-white font-bold mt-10 border-dashed border-4 border-[#1e2124]">
            <h1>BEST</h1>
            <h1>HOSTEL</h1>
            <h1>2020</h1>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
