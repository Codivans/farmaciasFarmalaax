import React,{ useState } from 'react';
import './../App.css';
import { IoCart } from "react-icons/io5";
import { MdClose, MdDelete, MdKeyboardArrowUp, MdOutlineKeyboardArrowDown  } from "react-icons/md";
import { CardProduct } from '../components/CardProduct';
import { Link } from 'react-router-dom';

export const Volante = () => {
    const [cart, setCart] = useState([]);
    const [show, setShow] = useState(false);
    const [showProducts, setShowProducts] = useState(true);
    const [data, setData] = useState({
      nombre: '',
      calle: '',
      colonia: '',
      municipio: '',
      cp: ''
    })

    const products = [
      {codigo:'7501080954199',nombre:'PRESERVATIVO TROJAN PIEL DESNUDA CON 3 PIEZAS ', precio:63,oferta:59},
      {codigo:'7501080950139',nombre:'PRESERVATIVO TROJAN PRO-TECH CON 3 PIEZAS ', precio:59,oferta:52},
      {codigo:'7501080911185',nombre:'STERIMAR MANGANESO SPRAY CON ENVASE 100ML ', precio:245,oferta:215},
      {codigo:'7501108763475',nombre:'ADVIL 200 MG CON 10 CÁPSULAS', precio:53,oferta:48},
      {codigo:'7501108763468',nombre:'ADVIL 200 MG CON 20 CÁPSULAS', precio:96,oferta:81},
      {codigo:'7501108767527',nombre:'ADVIL 400 MG CON 10 CÁPSULAS', precio:92,oferta:78},
      {codigo:'7501108767947',nombre:'ADVIL 400 MG CON 20 CÁPSULAS', precio:147,oferta:133},
      {codigo:'7501065001337',nombre:'CALTRATE 600 + D CON 30 TABLETAS', precio:145,oferta:125},
      {codigo:'7501065001634',nombre:'CALTRATE 600+D CON 60 TABLETAS', precio:252,oferta:219},
      {codigo:'7501065002631',nombre:'CALTRATE 600+M CON 60 TABLETAS', precio:275,oferta:238},
      {codigo:'7501065095718',nombre:'CENTRUM BALANCE FRASCO CON 30 TABLETAS', precio:155,oferta:134},
      {codigo:'7501065095923',nombre:'CENTRUM CON 60 TABLETAS', precio:259,oferta:224},
      {codigo:'7501065003973',nombre:'CENTRUM GENDER +50 HOMBRES CON 60 TABLETAS ', precio:335,oferta:290},
      {codigo:'7501065004000',nombre:'CENTRUM GENDER +50 MUJER  CON 60 TABLETAS ', precio:335,oferta:290},
      {codigo:'7501065095978',nombre:'CENTRUM PERFORMANCE  CON 30 TABLETAS', precio:182,oferta:158},
      {codigo:'7501065095947',nombre:'CENTRUM SILVER +50 CON FRASCO 30 TABLETAS', precio:181,oferta:157},
      {codigo:'7501065095961',nombre:'CENTRUM SILVER CON 100 TABLETAS', precio:445,oferta:385},
      {codigo:'7501065053138',nombre:'EMULSION DE SCOTT  SABOR CEREZA FRASCO CON 200 ML', precio:94,oferta:82},
      {codigo:'7501065053121',nombre:'EMULSION DE SCOTT SABOR NARANJA FRASCO CON 200 ML', precio:94,oferta:82},
      {codigo:'7501065064714',nombre:'EXCEDRIN 250/250/65MG MIGRANA 24 TABLETAS', precio:87,oferta:78},
      {codigo:'7501064560163',nombre:'IODEX UNGUENTO CRISTAL TARRO CON 60 G', precio:72,oferta:63},
      {codigo:'7501124815103',nombre:'LAMISIL CREMA PARA PIE DE ATLETA EN TUBO CON 30 G', precio:114,oferta:99},
      {codigo:'310158081111',nombre:'PASTA DENTAL SENSODYNE MENTA FRESCA CON TUBO 113G ', precio:100,oferta:92},
      {codigo:'310158077046',nombre:'PASTA DENTAL SENSODYNE ORIGINAL CON TUBO 113G ', precio:105,oferta:92},
      {codigo:'7794640171550',nombre:'PASTA DENTAL SENSODYNE RAPIDO ALIVIO CON TUBO 100G ', precio:127,oferta:111},
      {codigo:'7794640170133',nombre:'PASTA DENTAL SENSODYNE REPARA & PROTEGE CON TUBO 100G ', precio:127,oferta:111},
      {codigo:'310158085041',nombre:'PASTA DENTAL SENSODYNE WHITENING+ ANTI SARRO CON TUBO 113G ', precio:100,oferta:92},
      {codigo:'7501094910464',nombre:'PROCTO-GLYVENOL 400MG/40MG CON 5 SUPOSITORIOS ', precio:211,oferta:187},
      {codigo:'7501065062529',nombre:'ROBAX GOLD 500MG/200MG CON 24 TABLETAS', precio:231,oferta:196},
      {codigo:'7501065013798',nombre:'SENOKOT 187 MG CON 28 TABLETAS', precio:88,oferta:77},
      {codigo:'7501124810917',nombre:'SENOKOT F FORTE CON 30 TABLETAS ', precio:172,oferta:149},
      {codigo:'7501065064585',nombre:'SENSODYNE SENSITIVITY & GUM 100 G WHITENING', precio:118,oferta:111},
      {codigo:'7501065005366',nombre:'TESALON 100 CON  20 CAPSULAS   + ADVIL CON  2  TABLETAS ', precio:156,oferta:131},
      {codigo:'7501050612555',nombre:'ALGITRIN 325MG/200MG CON 12 TABLETAS', precio:166,oferta:154},
      {codigo:'7501050612562',nombre:'ALGITRIN 325MG/200MG CON 24 TABLETAS', precio:286,oferta:264},
      {codigo:'7503000645477',nombre:'AMAL 8MG CON 10 TABLETAS ', precio:929,oferta:814},
      {codigo:'7502213144227',nombre:'AMAL SOLUCION 2MG/ML  CON 1 AMPOLLETA 2ML', precio:227,oferta:195},
      {codigo:'7501070614461',nombre:'AMOXIBRON 250MG CON FRASCO 75ML', precio:296,oferta:265},
      {codigo:'7501070622152',nombre:'AMOXIBRON 500MG CON 12 CAPSULAS ', precio:300,oferta:278},
      {codigo:'7501070614454',nombre:'AMOXIBRON PEDIATRICO 500MG/8MG/5ML CON FRASCO 75ML', precio:391,oferta:362},
      {codigo:'7501037907193',nombre:'BISOLSEK JARABE 200MG CON FRASCO 120ML ', precio:150,oferta:134},
      {codigo:'7501037907124',nombre:'BISOLVON INFANTIL SOLUCION FRASCO CON 120ML', precio:159,oferta:136},
      {codigo:'7501037907117',nombre:'BISOLVON SOLUCION ADULTO FRASCO CON 120 ML', precio:151,oferta:134},
      {codigo:'7501070699727',nombre:'CEDAX 400MG CON 5 CAPSULAS ', precio:715,oferta:658},
      {codigo:'7501165007192',nombre:'CERVILAN 80MG CON 30 COMPRIMIDOS ', precio:805,oferta:768},
      {codigo:'7501070612849',nombre:'CLAVULIN 12 H 400 MG-57MG/5 ML PEDIATRICO', precio:396,oferta:366},
      {codigo:'7501070612993',nombre:'CLAVULIN 12H  875MG/125MG CON 15 TABLETAS ', precio:687,oferta:636},
      {codigo:'7501070612955',nombre:'CLAVULIN 12H 875MG/125MG CON 10 TABLETAS', precio:655,oferta:606},
      {codigo:'7501070612771',nombre:'CLAVULIN 12H PEDIATRICO 200MG CON FRASCO 40ML', precio:225,oferta:209},
      {codigo:'7501070612856',nombre:'CLAVULIN 12H SUSPENSION 600MG CON FRASCO 50ML', precio:419,oferta:375},
      {codigo:'7501070612917',nombre:'CLAVULIN 250 MG SUSP 75ML', precio:393,oferta:364},
      {codigo:'7501070612894',nombre:'CLAVULIN 500MG CON 15 TABLETAS ', precio:609,oferta:564},
      {codigo:'7501385410000',nombre:'CUERPO AMARILLO FUERTE CON 6 AMPOLLETAS/2ML', precio:734,oferta:692},
      {codigo:'3594450170071',nombre:'DAFLON 1000MG SUSPENSION CON 30 SOBRES', precio:1230,oferta:1160},
      {codigo:'7501070615512',nombre:'DAFLON 450MG CON 20 TABLETAS/ 3X2', precio:1295,oferta:1223},
      {codigo:'7501385420061',nombre:'DANZEN 5MG CON 30 TABLETAS ', precio:272,oferta:252},
      {codigo:'7501072300010',nombre:'DESENEX CREM 22.6G/100G CON TBO 28G', precio:51,oferta:48},
      {codigo:'7501072300027',nombre:'DESENEX CREM 22.6G/100G CON TBO 48G', precio:72,oferta:67},
      {codigo:'7501070648640',nombre:'DIMODAN 100MG CON 20 CAPSULAS ', precio:410,oferta:381},
      {codigo:'7501159525015',nombre:'EUCALIPTINE JARABE FRASCO CON 140 ML', precio:147,oferta:115},
      {codigo:'7501159526029',nombre:'EUCALIPTINE SOLUCION 100MG  CON 10 AMPOLLETAS 1ML', precio:330,oferta:302},
      {codigo:'7501072340160',nombre:'FLAGYL 250 MG C/120 ML', precio:251,oferta:243},
      {codigo:'7501072340092',nombre:'FLAGYL 500MG CON 30 COMPRIMIDOS ', precio:259,oferta:235},
      {codigo:'7501072340115',nombre:'FLAGYL V 500MG CON 10 OVULOS ', precio:216,oferta:207},
      {codigo:'7501070602178',nombre:'GAMO 20MG CON 14 TABLETAS ', precio:709,oferta:658},
      {codigo:'7501050649834',nombre:'GARAMICINA HIPAK 80MG C/JGA', precio:221,oferta:205},
      {codigo:'7501070602437',nombre:'GREMILTAL 45MG CON 10 CAPSULAS ', precio:407,oferta:375},
      {codigo:'7501385420238',nombre:'HEMOSIN K 25MG /5 MG CON 32 TABLETAS', precio:378,oferta:351},
      {codigo:'7501385410055',nombre:'HEMOSIN-K CON 3 FRASCOS AMPULA 2ML/3 AMPOLLETAS 2ML', precio:386,oferta:358},
      {codigo:'7501385494475',nombre:'HI-DEX 100 MG 1ML CON 3 AMPOLLETAS', precio:410,oferta:381},
      {codigo:'7501082203318',nombre:'ILOSONE 500/500MG  CON 20 TABLETAS ', precio:614,oferta:548},
      {codigo:'7501082203202',nombre:'ILOSONE LIQUIDO 250MG CON FRASCO 120ML', precio:569,oferta:527},
      {codigo:'7501165011687',nombre:'ISODINE ANTISÉPTICO SOLUCIÓN 120 ML', precio:227,oferta:185},
      {codigo:'7501165011694',nombre:'ISODINE BUCOFARÍNGEO SOLUCIÓN 120 ML', precio:229,oferta:185},
      {codigo:'7501165011670',nombre:'ISODINE ESPUMA FRASCO CON 120 ML', precio:215,oferta:182},
      {codigo:'41388284316',nombre:'KANKA SOLUCION CON ENVASE 9.7ML Y APLICADOR ', precio:206,oferta:197},
      {codigo:'7501070618650',nombre:'LAXOYA 8.60/50 MG COMP 20', precio:165,oferta:163},
      {codigo:'7501165011410',nombre:'LONOL CREMA EN TUBO CON 60 G', precio:205,oferta:179},
      {codigo:'7501165011403',nombre:'LONOL SPORT GEL EN TUBO CON 30 G', precio:127,oferta:121},
      {codigo:'7503006698255',nombre:'MICRODACYN HYDROGEL ANTISÉPTICO 100 G', precio:279,oferta:228},
      {codigo:'7503006698316',nombre:'MICRODACYN SOLUCION ANTISÉPTICA 120 ML', precio:213,oferta:185},
      {codigo:'7502246642073',nombre:'MICRODACYN SOLUCION ANTISÉPTICA 60 ML', precio:147,oferta:126},
      {codigo:'7503006698323',nombre:'MICRODACYN SOLUCION ANTISÉPTICA SPRAY 240 ML', precio:350,oferta:300},
      {codigo:'7501165005624',nombre:'NEUROFLAX 20MG /4MG CON 3 FRASCO AMPULA/ 3 AMPOLLETAS', precio:1198,oferta:1132},
      {codigo:'891671002277',nombre:'NORFLEX PLUS 450MG', precio:595,oferta:551},
      {codigo:'7501070636517',nombre:'OMURO 40MG CON 15 TABLETAS ', precio:495,oferta:459},
      {codigo:'7501086301041',nombre:'OXAL 150MG/200MG CON 2 TABLETAS ', precio:134,oferta:117},
      {codigo:'7501070635299',nombre:'PENAMOX  PEDIATRICA 500MG/5ML  CON FRASCO 75ML', precio:245,oferta:227},
      {codigo:'7501070635572',nombre:'PENAMOX 12 H -DUO 50 ML', precio:346,oferta:320},
      {codigo:'7501070635565',nombre:'PENAMOX 12H-DUO 600MG/42.9MG/5ML  CON FRASCO 50ML', precio:350,oferta:324},
      {codigo:'7501070635183',nombre:'PENAMOX 500MG CON 12 CAPSULAS ', precio:227,oferta:211},
      {codigo:'7501070635411',nombre:'PENAMOX M PEDIATRICA 250MG/8MG/5ML  CON FRASCO 75ML', precio:287,oferta:266},
      {codigo:'7501070635435',nombre:'PENAMOX M PEDIATRICO 500MG/8MG/5ML CON FRASCO 75ML', precio:393,oferta:364},
      {codigo:'7501070635237',nombre:'PENAMOX PEDIATRICA 250MG/5ML CON FRASCO 75ML', precio:209,oferta:193},
      {codigo:'7501328979366',nombre:'PIRIMIR 100MG CON 24 TABLETAS ', precio:233,oferta:216},
      {codigo:'7501070601171',nombre:'POSIPEN 12H/1G CON 10 TABLETAS ', precio:457,oferta:424},
      {codigo:'7501070634810',nombre:'POSIPEN 500MG CON 12 CAPSULAS ', precio:412,oferta:382},
      {codigo:'7501070634698',nombre:'POSIPEN PEDIATRICA 250MG/5ML CON FRASCO 90ML ', precio:423,oferta:392},
      {codigo:'7501070615048',nombre:'PRANOSINE 250MG/5ML CON FRASCO 60ML', precio:487,oferta:451},
      {codigo:'7501070615123',nombre:'PRANOSINE 500MG CON 20 TABLETAS ', precio:585,oferta:542},
      {codigo:'7502213144012',nombre:'ROFUCAL 25MG CON 30 TABLETAS ', precio:315,oferta:287},
      {codigo:'7501070635756',nombre:'STADIUM 25MG CON 10 TABLETAS ', precio:447,oferta:440},
      {codigo:'7501070635770',nombre:'STADIUM 25MG CON 20 TABLETAS ', precio:663,oferta:615},
      {codigo:'7501070635787',nombre:'STADIUM 75MG/25MG CON 10 TABLETAS ', precio:475,oferta:466},
      {codigo:'3664898062778',nombre:'SULVERION 200MG CON 20 COMPRIMIDOS ', precio:373,oferta:366},
      {codigo:'7501070600709',nombre:'SYNCOL CON 12 COMPRIMIDOS', precio:92,oferta:90},
      {codigo:'7501070600556',nombre:'SYNCOL CON 24 COMPRIMIDOS', precio:119,oferta:116},
      {codigo:'7501070600730',nombre:'SYNCOL MAX CON 12 COMPRIMIDOS', precio:110,oferta:108},
      {codigo:'7501165000391',nombre:'TRENTAL 400MG CON 30 TABLETAS ', precio:647,oferta:643},
      {codigo:'7501385450129',nombre:'UVEGA 1% CON FRASCO GOTERO 30ML', precio:247,oferta:231},
      {codigo:'7501008493007',nombre:'VAGITROL-V CON 10 OVULOS VAGINALES', precio:456,oferta:443},
      {codigo:'7501070635664',nombre:'VONTROL 25MG CON 25 TABLETAS ', precio:302,oferta:298},
      {codigo:'7501070635718',nombre:'VONTROL 40MG/2ML CON 2 AMPOLLETAS ', precio:168,oferta:166},
      {codigo:'7501070618933',nombre:'ZENTEL 200MG CON 10 TABLETAS ', precio:239,oferta:235},
      {codigo:'7501070619039',nombre:'ZENTEL DUAL  200MG/150MG CON 2 TABLETAS ', precio:269,oferta:264},
      {codigo:'7501070618957',nombre:'ZENTEL DUAL  400MG/100MG CON FRASCO 10ML', precio:236,oferta:226},
      {codigo:'7501174600124',nombre:'ADEROGYL C SOLUCION INFANTIL CON FRASCO GOTERO 10ML', precio:64,oferta:46},
      {codigo:'7501165010789',nombre:'ADEROGYL C SOLUCION INFANTIL CON FRASCO GOTERO 30ML', precio:171,oferta:129},
      {codigo:'7501165003040',nombre:'ADEROGYL SOLUCION INYECTABLE CON 5 AMPOLLETA DE 3ML', precio:153,oferta:100},
      {codigo:'7501165001718',nombre:'ALLEGRA 120MG CON 10 TABLETAS ', precio:419,oferta:352},
      {codigo:'7501165001725',nombre:'ALLEGRA 180MG CON 10 TABLETAS ', precio:497,oferta:398},
      {codigo:'7501165006386',nombre:'ALLEGRA D 60MG/25MG CON 10 TABLETAS ', precio:461,oferta:390},
      {codigo:'7501165006171',nombre:'ALLEGRA SUSPENSION PEDIATRICO CON FRASCO 150ML', precio:528,oferta:448},
      {codigo:'7501165011649',nombre:'BUSCAPINA 10 MG CON 24 TABLETAS', precio:216,oferta:183},
      {codigo:'7501165011557',nombre:'BUSCAPINA 20MG/ML CON 3 AMPOLLETAS 1ML', precio:262,oferta:225},
      {codigo:'7501165011632',nombre:'BUSCAPINA COMPOSITUM 10MG/250MG CON 20 TABLETAS ', precio:441,oferta:370},
      {codigo:'7501165011656',nombre:'BUSCAPINA FEM 20/400MG CON 10 TABLETAS', precio:162,oferta:137},
      {codigo:'7501328980119',nombre:'ENTEROGERMINA 2 BILLONES UFC CON 20 AMPOLLETAS', precio:467,oferta:406},
      {codigo:'3664798044591',nombre:'ENTEROGERMINA ADULTO 12 CÁPSULAS', precio:346,oferta:293},
      {codigo:'7501165010826',nombre:'ENTEROGERMINA ORAL  4 BILLONES CON 10 AMPOLLETAS 5ML ', precio:495,oferta:396},
      {codigo:'7501328979502',nombre:'HISTIACIL NF JARABE ADULTO PARA LA TOS 150 ML', precio:147,oferta:116},
      {codigo:'7501328979496',nombre:'HISTIACIL NF JARABE INFANTIL PARA LA TOS 150 ML', precio:147,oferta:117},
      {codigo:'7501165009486',nombre:'JABON INTIMO LACTACYD PRO BIO SH FEMINA 200 ML', precio:86,oferta:69},
      {codigo:'7501165009523',nombre:'JABON INTIMO LACTACYD PRO BIO SH FRESH', precio:78,oferta:69},
      {codigo:'7501165011380',nombre:'PHARMATON DUO CON 2 FRASCOS CON 30 CÁPSULAS CADA FRASCO', precio:312,oferta:264},
      {codigo:'7501165011830',nombre:'PHARMATON FRASCO CON 100 CAPSULAS', precio:428,oferta:363},
      {codigo:'7501165011786',nombre:'PHARMATON FRASCO CON 30 CÁPSULAS', precio:178,oferta:126},
      {codigo:'7501165011724',nombre:'PHARMATON KIDDI JARABE EN FRASCO CON 200 ML', precio:445,oferta:377},
      {codigo:'7501159580021',nombre:'PULMONARON CON 20 AMPOLLETAS 3ML', precio:1430,oferta:1254},
      {codigo:'7501159580182',nombre:'SINUBERASE PROBIÓTICOS CAJA CON 10 AMPOLLETAS', precio:255,oferta:216},
      {codigo:'7501159580014',nombre:'SINUBERASE PROBIÓTICOS CON 48 COMPRIMIDOS', precio:236,oferta:200},
      {codigo:'7501300450210',nombre:'BACTRIM F 800MG/160MG CON 15 TABLETAS ', precio:353,oferta:338},
      {codigo:'7501300450227',nombre:'BACTRIM SUSPENSION 4.0G-0.8G CON FRASCO 100ML', precio:194,oferta:186},
      {codigo:'7501300409010',nombre:'CEFURACET 250ML/5ML CON FRASCO 50ML', precio:493,oferta:466},
      {codigo:'7501300409034',nombre:'CEFURACET 500MG CON 10 TABLETAS ', precio:663,oferta:616},
      {codigo:'7501300450265',nombre:'DEPLES 50MG/3MG/300MG CON 24 CAPSULAS ', precio:112,oferta:102},
      {codigo:'7501300407122',nombre:'LERK 100MG CON 1 COMPRIMIDO', precio:91,oferta:85},
      {codigo:'7501300407139',nombre:'LERK 100MG CON 4 COMPRIMIDOS ', precio:318,oferta:295},
      {codigo:'7501300450418',nombre:'POVERFUL 20MG CON 1 TABLETA', precio:71,oferta:68},
      {codigo:'7501058715517',nombre:'GRANEODIN B 10MG CON 24 PASTILLAS ', precio:92,oferta:82},
      {codigo:'7501095452147',nombre:'TEMPRA 500 MG CON 20 TABLETAS', precio:88,oferta:77},
      {codigo:'7501058715326',nombre:'TEMPRA BOOST ADULTO 500MG/65MG CON 12 TABLETAS ', precio:60,oferta:53},
      {codigo:'7501095452505',nombre:'TEMPRA FORTE 650 MG CON 24 TABLETAS', precio:113,oferta:99},
      {codigo:'7502216930599',nombre:'AVAPENA 20MG/2ML CON 5 AMPOLLETAS/2ML', precio:258,oferta:224},
      {codigo:'7502216930414',nombre:'AVAPENA 25MG CON 20 TABLETAS ', precio:206,oferta:181},
      {codigo:'7502216934917',nombre:'CALCIUM-SANDOZ +1000C CON 10 COMPRIMIDOS EFERVESCENTES ', precio:200,oferta:171},
      {codigo:'7502216930476',nombre:'LOPRESOR 100MG CON 20 TABLETAS', precio:131,oferta:119},
      {codigo:'7502216935273',nombre:'TAEDALLIS 20MG CON 4 TABLETAS ', precio:303,oferta:289},
      {codigo:'7502216935747',nombre:'TIREVIN 20 MG CAJA CON 28 COMPRIMIDOS', precio:1251,oferta:610}
    ]

    const addToCart = (product) => {
        const existingCartItem = cart.find((item) => item.codigo === product.codigo);
    
        if (existingCartItem) {
          // Si el producto ya está en el carrito, incrementa la cantidad
          setCart((prevCart) =>
            prevCart.map((item) =>
              item.codigo === product.codigo
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          );
        } else {
          // Si el producto no está en el carrito, agrégalo
          setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
        }
      };
    
      const removeFromCart = (product) => {
        const existingCartItem = cart.find((item) => item.codigo === product.codigo);
    
        if (existingCartItem.quantity > 1) {
          // Si la cantidad es mayor que 1, simplemente decrementa la cantidad
          setCart((prevCart) =>
            prevCart.map((item) =>
              item.codigo === product.codigo
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
          );
        } else {
          // Si la cantidad es 1, elimina el elemento del carrito
          setCart((prevCart) =>
            prevCart.filter((item) => item.codigo !== product.codigo)
          );
        }
      };

      const countCarrito = cart.reduce((acc,val) => acc + val.quantity,0)

      const importe = cart.reduce((acc, val) => acc + val.quantity * val.oferta,0)

      const showCart = () => {
        setShow(!show)
      }
      const showProductsCart = () => {
        setShowProducts(!showProducts)
      }

    const enviarPedido = () => {
      console.log('first')
      const mensajePedido = generarMensajePedido();
      const numeroWhatsApp = '5510935095';  // Reemplaza con el número de WhatsApp deseado
      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajePedido)}`;
      
      window.open(urlWhatsApp, '_blank');
    }

    const generarMensajePedido = () => {
        let mensaje = `
          Hola me interesaron estos productos, ¿me puedes tomar mi pedido por favor?\n\n
          *Nombre:* ${data.nombre}\n\n
          Mi Dirección:
          *Calle:* ${data.calle}, *Colonia:* ${data.colonia}, *Municipio o Delegación:* ${data.municipio}, *Código Postal:* ${data.cp}\n\n
          *Detalle de mi pedido:*\n
        `;

        cart.forEach(item => {
        mensaje += `${item.quantity} ${item.quantity > 1 ? "Pzs" : "Pza"} ${item.codigo} \n ${item.nombre}\n Precio: $${item.precio.toFixed(2)}\n\n`;
        });

        const importeTotal = cart.reduce((total, item) => total + item.precio * item.quantity, 0);
        mensaje += `*Importe Total:* $${importeTotal.toFixed(2)}`;

        return mensaje;
        // vaciarCarrito();
    }


    const handleChange = (event) => {
        const { name, value } = event.target
        setData({ ...data, [name]: value })
    };



  return (
    <>
        <div className='header-volante'>
            <img src="https://farmalaax.com/assets/logo-farmaLAAX.ea6db7ee.png" title="Farmalaax" />

            <button id="btnOpenPopup" className="btn-cart" onClick={showCart}>
                <IoCart />
                <span id="cantidadCarrito">{countCarrito} Pzs</span>
            </button>
        </div>
        <section className='content-cards'>
            {
                products.map((product) => (
                  <CardProduct product={product} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
                ))
            }
                
        </section>
        

        {
          show&&
            <div id="popup" class="popup">
              <div class="popup-content">
                  <span className="close" id="btnClosePopup" onClick={showCart}><MdClose /></span>
                  <h2>Carrito de Compras</h2>
                  <div id="carrito" className={showProducts ? '' : 'ocultar-cart'}>
                    {
                      cart.map((item) => {
                        return(
                          <div className="product-cart">
                              <div className="img-product-cart">
                                  <img src={'https://farmaprontoneza.com/image/'+ parseInt(item.codigo) + '.jpg'} />
                              </div>
                              <div className="info-product">
                                  <h4>{item.nombre}</h4>
                                  <p>{item.quantity} {item.quantity > 1 ? 'Pzas': 'Pza'} x $ {item.oferta.toFixed(2)}</p>
                                  <p>$ { (item.oferta * item.quantity).toFixed(2)}</p>
                              </div>
                              <div className='content-delete'>
                                <button onClick={() => removeFromCart(item)}>
                                  <MdDelete />
                                </button>
                              </div>
                          </div>
                        )
                      })
                    }
                  </div>

                  <div className="importeTotal">
                    <Link to="#" class="btn-delete">Vaciar carrito</Link>
                    <p>Total: $ {importe.toFixed(2)}</p>
                  </div>

                  <button className='btn-addres' onClick={showProductsCart}>
                    <p>
                      {showProducts ? 'Necesito mi pedido' : 'Ver detalle del carrito'}
                      {showProducts ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown  />}
                    </p>
                  </button>

                  <div className={showProducts ? 'content-addres' : 'content-addres-show'}>
                    <div className='control-inputs'>
                      <label>Nombre: </label>
                      <input type="text" placeholder='Escribe tu nombre' name="nombre" onChange={handleChange}/>
                    </div>
                    <div className='control-inputs'>
                      <label>Calle y numero: </label>
                      <input type="text" placeholder='Ej. Horacio Nelson #3' name="calle" onChange={handleChange}/>
                    </div>
                    <div className='control-inputs'>
                      <label>Colonia: </label>
                      <input type="text" placeholder='Ej. Moderna' name="colonia" onChange={handleChange}/>
                    </div>
                    <div className='control-inputs'>
                      <label>Municipio o  Delegacion: </label>
                      <input type="text" placeholder='Benito Juarez' name="municipio" onChange={handleChange}/>
                    </div>
                    <div className='control-inputs'>
                      <label>Codigo Postal: </label>
                      <input type="text" placeholder='03510' name="cp" onChange={handleChange}/>
                    </div>
                    <div class="botones-cart">
                        
                        <button class="btn-send" onClick={enviarPedido}>Enviar pedido por WhatsApp</button>
                    </div>
                  </div>
              </div>
            </div>
        }
    </>
  )
}
