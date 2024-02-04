import "./scss/Service.css"
import {Button} from '/src/App.jsx'
function Cart({src,h1,p}) {
  return (
    <>
      <div className="cart">
        <img className="imga" src={src} alt="Logo" />
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>
    </>
  );
}
export default function Service() {
  return (
   <>
   <img className="p" src="./src/img/p.png" alt="" />
    <div className="service">
      <h3>CARE FEATURES</h3>
      <h1>Awesome Service With Our Tools</h1>
      <div>
        <Cart src={'https://s3-alpha-sig.figma.com/img/c783/6671/1b973d9ccbef00fe759859bbfbbc3b52?Expires=1694390400&Signature=OBd5hFk9W9XCfiRtnyRdVzAG3s8npjDa0U7E2iaKKicuMNyF~1ys2MioO5AzsiMepB2HRQLci59nwLcFvkoM5hHnP67K0WIbngNX6v9ONi74h8JGIfOJKHnP~C2dIGq4NUY65JzlIv-NJ1EyEVYEBSwADA6ccH4RQ4akaEljJIMa3uwnQTHbIc5hFGihMaqsknZw9Cty0eBpFxBtDoG8Fck9m0pi163bQYn0-J4e6Xx43iJ07mU4~mRefj1Jm6EvFLtDl9lPqslwOVAoZ~UfO2NzAXcFRJ9Y2zWZPXFgoo~r1jC0uHAN-sb1ubsSFwmH51IyNLRML8M-fJokbPKIeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
        h1={'App Development'}
        p={'Helping families live intelligently means we’re always working to bring our customers.'}
        />
        <Cart src={'https://s3-alpha-sig.figma.com/img/86f6/ffb5/787101050be0eefbdd9a15976fe7f54f?Expires=1694390400&Signature=AI4mP5bt0LID8aBt6F17lP4pjl1dKN4OeNMmHNqZy3SilI1UIbHsYE0u4ie-CleYunNqnbBRM7ckVIProrKoS2IH29I3N2NNXW~XFr1VIZSW~8LxIqMkuqebaZzRWSeno81ThcaJxUqHvW9XBGyuw-JB3-C5OT38DSkHKrIoo1-XaGZS2zBHIg~VDdML1oJJFhuUeHlQcKLQNkyE0Bz82UNObIp4QXgtwsjswgK5VCGaRmcOPF8hGKDcrqOrECkMhduqnu7wfM1sNLj~Le-dKdytg4BWdDzrQup57Hd8~mIdY4jZk3M1tk-HMyK1LjqRMC~1cZw5wZ~QTjaX9Gp3bg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
        h1={'Cloud Storage'}
        p={'Helping families live intelligently means we’re always working to bring our customers.'}
         />
        <Cart src={'https://s3-alpha-sig.figma.com/img/1550/571f/9d96ca17b1f0c3101c4622b8b641b047?Expires=1694390400&Signature=B3dL8NYZ6-pPNwCmv5Wgz3W78yhe9VP7y9wPn2wte41YsrRcKnVXY75s-Hdim5D1jNK-Altarh4zmlwqPcnz2bLf6E3Xjm2va4GqM9svvKL~aZKF6ZvrNSjfQPBSXC5JBVmDJQId0Y4tLAnLaR~uoujdxfrOEEJn-r4-DtQHS~IjCtOEPoSoO~6SR4HuJZBgocm-wkLqAQrnx2415FVs~3GCXerod-jt2RLb0DfesD0zrelyDUGrYjjm~DOpmp6lUs0f9xZZMUJ-ohZ5ADjOsfkps7e8fMKUnobAkO5Vqi99NieLNmucusIkIRJXg9Z3mR~5WYwgwfd7-M-D3N2edw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
         h1={'UX Planning'}
         p={'Helping families live intelligently means we’re always working to bring our customers.'}
         />
      </div>
    </div>
    <div className="about">
      <div className="photo">
        <img className="x" src="./src/img/x.png" alt="" />
        <img src="./src/img/man1.png" alt="" />
        <img className="mac" src="./src/img/man2.png" alt="" />
      </div>
      <div className="ma">
        <h6>About</h6>
        <h1>Influencer Marketing for Your Business</h1>
        <p>With over 25 years of experience, we have crafted thousands of Strategic discovery process that enables us to peel back the Layers which enable us to understand, connect, represent and Dominate your market.</p>
        <Button>Phone Number: +002698 22 33</Button>
      </div>
    </div>
   </>
  )
}
