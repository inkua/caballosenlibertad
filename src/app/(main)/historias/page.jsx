import { TitleSection } from "../components/TitleSection";


function Historias() {
    const items = [
        {
          image: "https://s3-alpha-sig.figma.com/img/02e9/c10c/3343fbb4851573e37696c4755735ce1b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UWTAmDNq0ahhW1HgbHyeWZTh2o2eo8EPfwQETCr9hHPTGnywnl~kttab-8rzJG4CQ7szqNpqEnGr2HPQeYNVOodRkeXt-rkyRwsarLu36chacm8KFJUjDy4DV8BR~hkaV-PwtS696QabSrZKqFOINw7XIZaAnUMlDcfpyi7Ja2Ecc5Xc0iKSpZPCNcTtZJqwC5E~wZkkRNV8CNRd7F0x~GSTOtNjcWEpef5~Hqqm3KoSynPVhgsBLU4AJJcznW5w1vr6nrJN9~zGoVS7coAl5uZh-~rZxae0PeHzP4KmmWONt64lPz4MGl9IowN3aTa0f59JzXPQguZxJ7OQUq2w8g__",
          name: "Magnolia",
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Nulla facilisi. Sed euismod, nisl eget consectetur sagittis, nisl nunc egestas arcu, vitae aliquam ligula nisi sit amet t dolor eget elit vestibulum pharetra. Donec eu libero eu nulla dignissim sagittis. Suspendisse. t dolor eget elit vestibulum pharetra. dolor eget elit vestibulum pharetra. Donec eu libero eu nulla dignissim sagittis. Suspendisse. t dolor eget elit vestibulum pharetra. dolor eget elit vestibulum pharetra. Donec eu libero eu nulla dignissim sagittis. Suspendisse. t dolor eget elkfl.',
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/f895/0818/e0c761792c10dd3c8c854592a159902a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Stt0VZrUWPTh~0~ZCbyxeSi82~Dpe-jm9HH6uPZ7DFJBHnjadv2ivRBYqQoV~xzfO69t32wgtklrmEuxOIyVvexPXqR2PwaxJdjY3sxw0KUI8mpuQkJsyLLTKqgHeYkDtW5Z75rY0M61EJ4eljVvjyZvFOvXjdMn-hNWMpjcjI4TalDU0ekd3oj4etMxLkjatpnDGEfhG2KmodtAagt-m5X3dSHa8HTTUf7UkFpq7cCN2rlPUMAFwJFp9iKDvxqE-1Uu-YDaZOpNwARvA1i5ElYkSt7t5r13~58GfXPXh16ZQm4YmF619J1Tb83XeFKniNVWNWoCMMtNHVP1kHX2Mw__",
            name: "Caballo 2",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Nulla facilisi. Sed euismod, nisl eget consectetur sagittis, nisl nunc egestas arcu, vitae aliquam ligula nisi sit amet t dolor eget elit vestibulum pharetra. Donec eu libero eu nulla dignissim sagittis. Suspendisse. t dolor eget elit vestibulum pharetra. dolor eget elit vestibulum pharetra. Donec eu libero eu nulla dignissim sagittis. Suspendisse. t dolor eget elit vestibulum pharetra. dolor eget elit vestibulum pharetra. Donec eu libero eu nulla dignissim sagittis. Suspendisse. t dolor eget elkfl.',
        },
    
        {
            image: "https://s3-alpha-sig.figma.com/img/a695/39d8/a71ada2a2bd188c4d4b5a8f7768f6782?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qYVoFMyGgHF1KFSlv9ag27tjKcrX69qsYEb3JaY85VxXAwqDYkG8vP5yHm1r2IGcOl8MHzjofhAoO-re6JZDXuF-Q2uGGfRPYj1Ch3OIQFQH7Zr8r6tvXy146q5zDUe7Xye3DuRpOYkGWiv3poZhKQMWKpsIKgZNNKRGUoUG78G-zhvKqBC8LG3YjiBXk3-qzDgkLLXmaWvhl~xHoCgVMsc8K71LHhFR1UXTm9lhLdlebaQUwgHcCcOGkih4~R7wSUvgBdhKi9Hecx4pKlj~mlSELO22hTEouyIPI8uLrYUU6iPtT5kfwySRfV8Mky2XDGS0vqcSff6bAouwfI3t5g__",
            name: "Caballo 3",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Nulla facilisi. Sed euismod, nisl eget consectetur sagittis, nisl nunc egestas arcu, vitae aliquam ligula nisi sit amet t dolor eget elit vestibulum pharetra. Donec eu libero eu nulla dignissim sagittis. Suspendisse. t dolor eget elit vestibulum pharetra. dolor eget elit vestibulum pharetra. Donec eu libero eu nulla dignissim sagittis. Suspendisse. t dolor eget elit vestibulum pharetra. dolor eget elit vestibulum pharetra. Donec eu libero eu nulla dignissim sagittis. Suspendisse. t dolor eget elkfl.',
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/a4df/a67f/8f6f25893c77a9d8f2441ad86b93d333?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lJeh9axr~tLgJ8YvizvC53nMfo21HEe1RzItVbyV-h1mSPkwXT0q7F7DdmqK-pIijtpLgJo0CupHCCP7VVIm2SGS-6PSu2BiZKo7WIDPOVz54dJfpelG81qN~OL1p6nUL1HBjIpG3c1rp7RbhV0xpv-I9B-XxI25OZ0Xk-dmOUzlYOBsrpBNJ3hGofVqlAiVwHH-xG5b0667WQY~zJkoKSXa2wMv599JQ3mKC~zX1sO9~fAts~Pp0PaZlkzzjNvGTqXCXt1AuYxItByjMlhAnrUKtkapp8qBoxWbLRwqpDIMz3qoYXHMIsEPP7RyjArTESgvSzswq9mQs5eXSTBNQQ__",
            name: "Caballo 4",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Nulla facilisi. Sed euismod, nisl eget consectetur sagittis, nisl nunc egestas arcu, vitae aliquam ligula nisi sit amet t dolor eget elit vestibulum pharetra. Donec eu libero eu nulla dignissim sagittis. Suspendisse. t dolor eget elit vestibulum pharetra. dolor eget elit vestibulum pharetra. Donec eu libero eu nulla dignissim sagittis. Suspendisse. t dolor eget elit vestibulum pharetra. dolor eget elit vestibulum pharetra. Donec eu libero eu nulla dignissim sagittis. Suspendisse. t dolor eget elkfl.',
        },
      ];
  return (
    <div className="pt-[70px] lg:pt-[90px]">
      <TitleSection
        titleTextContent="Historias de nuestros rescatados"
        spanTextContent="Conocé las historias de nuestros rescatados"
      />
      <div className="lg:max-w-content max-w-[90%] mx-auto grid grid-cols-2 gap-4 items-center justify-center">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="relative group w-full h-auto flex justify-center items-center"
          >
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-auto"
            />
            <div 
              className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-25 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            >
              {item.name.toUpperCase()}
            </div>
          </div>
        ))}
        </div>
        <div className='max-w-[1440px] mx-auto items-center justify-center'>
          <h2 className="text-[16px] sm:text-[22px] md:text-[35px] lg:text-[46px] xl:text-[50px] leading-120 font-bold text-primary col-span-full text-center my-[40px] lg:my-[120px]">
              ¡Esto no sería posible sin tu ayuda y la de nuestros voluntarios!
          </h2>
        </div>
    </div>
  );
}

export default Historias;