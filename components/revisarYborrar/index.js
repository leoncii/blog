import Tarjeta_de_credito from '../../svg/tarjeta_de_credito';
import Tarjetas_de_debito from '../../svg/tarjeta_de_debito';
import Billetera from '../../svg/billetera';
import Image from 'next/image'

export default function OnlinePayments() {
  return <>
    <section className='container'>
      <Image width={125} height={125} src="/pagos_online.png" alt="pagos online" />
      <hr />
      <h1>Pagos online</h1>
      <h2>Introdccion</h2>
      <p>Aqui te contamos como funcionan las ventas electronicas si tienes un negocio te haz preguntado como puedes
        ofrecer
        tus servicios a tus clientes?... , como puedes cobrar por ellos?... , que implicaciones tiene?... , que medios deberias utilizar?... , que servicios
        ofrecer a tus clientes?... en este blog cubriremos todos estos
        problemas y asi puedas llevar tu negocio al siguiente nivel.
      </p>

      <section>
        <h2>El dinero</h2>
        <p>El dinero es cualquier cosa que las personas esten de acuerdo en utilizar para representar el valor de algo e
          intercambiarlo por productos o servicios, solo requiere que las personas compartan la idea de que existe en
          nuestro imaginario colectivo por ejemplo en el colegio usabamos la comida como intercambio de material escolar o
          servicios como que te lo hagan la tarea</p>

        <strong><i>El dinero es el sistema de confianza mas eficiente y universal jámas creado</i></strong>
        <p>
          El dinero tiene 2 principios:
          -Conversión: Es lo que te permite intercambiar dulces por material escolar, o dulces por un servicio.
          -Confianza: Tu puedes ir con dinero a cualquier parte del mundo y van aceptar tu dinero sin importar como te veas,
          como te vistas,o como huelas... mientras tengas dinero la gente no discrimina tu dinero siempre es bueno.
        </p>
        <h3>La evolucion del dinero</h3>
        <p>Por miles de años los humanos utilizaban el trueque como metodo de intercambio tu me das una gallina y yo te doy
          maiz, tu me das una vaca yo te doy 50 gallinas y esto fue por muchos años,despues cuando las ciudades crecian las
          equivalencias de los trueques fue trayendo problema,por ejemplo si tu me das una vaca joven cuantas gallinas te
          tengo que dar y si no quieres gallinas y deseas maiz a cuanto equivale?...y con esto en mesopotamia se establecio
          la primera unidad de peso el SHEKEL y asi se establecieron los valores de las cosas, ahora podias intercambiar
          gallinas, vacas, maiz por shekels estas monedas estaban hechas de oro o plata y se introduce un nuevo concepto la
          autoridad que certifica el peso y valor de esas monedas cuando recibías monedas tu tenias un respaldo que era la
          figura del rey, veias el rostro del rey en un lado de la moneda y asi se genera esta confianza de suma
          importancia, con el tiempo las personas no deseaban llevar sus monedas con ellos todo el tiempo y asi surgen los
          Bancos y el papel moneda(dinero representativo) con el tiempo se extendio por ejemplo con marco polo por todo
          europa, luego bancos en estocolmo replicaron papel moneda(billetes) en el año 1661 d.c y le siguieron otros paises
          y con esto todo europa.
          Con los bancos por todo europa trajo la creacion de una nueva entidad que son los bancos nacionales que son
          controlados y regulados por el estado en diferentes partes del mundo como el dolar, los yenes japoneses, pesos
          colombianos, euros, etc. El dinero evolociona de esta forma y en la segunda guerra mundial paso algo que el dolar
          americano se convirtio en el primer sistema de respaldo reemplazando al oro y a la plata como reservas de los
          bancos y fue en 1971 que Estados Unidos suspendio la conversion de oro y plata a dolares y asi se quedaron solo
          con los dolares esto se adopto en todo el mundo hoy en dia las monedas del mundo ya no estan respaldadas tanto por
          las reservas de oro, plata o recursos naturales su verdadero valor esta en la confianza que existe el los
          gobiernos y su capacidad de recaudacion fiscal es decir como pueden obtener impuestos y como pueden producir mas
          bienes y materiales
        </p>
      </section>


      <section>
        <h2>Dinero digital</h2>
        <p>Ahora en 2021 cuando fue escrito este post la tecnologia cambio las reglas del juego includo el dinero claro.
          Antes deciamos que el dinero estaba respaldado por su valor en oro, plata, recursos naturales, etc. Ahora
          encontramos una nueva forma de representarlo y almacenarlo ya no en barras de oro junto a una boveda secreta
          debajo un bunquer protegido por militares sino almacenados como ceros y unos en un chip este cambio tambien trae
          nuevas formas de servicios que los llamamos FINTECH como la Banca móvil, Big data, Criptomonedas, Forex, Trading y
          otros.
          Es importante que conoscas estos metodos de pagos para usarlos a tu favor, ahora nos enfocaremos en, ¿que metodos
          de pago debo utilizar?, ¿Cuales son estos metodos de pago?, ¿Cuales incorporarlos a mi negocio?.
        </p>
      </section>


      <section>
        <h2>Nuevos hábitos de consumo</h2>
        <strong><i>El uso del efectivo cae entre los millenials y en grandes ciudades.</i></strong>
        <span>BBVA</span>
        <ul>
          <li>Pagos realizados sin efectivo crecio 8% este año 2021</li>
          <li>El 30% del dinero mundial representa: El dinero digital</li>
        </ul>
        <p>El metodo de pago de la poblacion esta cambiando hacia los pagos online cada año que pasa mas gente se va
          sumando.</p>
        <link rel="stylesheet" href="https://www.linio.com.mx/sp/indice-ecommerce" />
      </section>

      <section>
        <h2>Metodos de pago electronico</h2>
        <p>Antes de entrar en materia ten claro estas definiciones: </p>
        <ul>
          <li>Pago electrónico = no efectivo.</li>
          <li>Pago en persona = requiere contacto.</li>
          <li>Pago en línea = sin contacto.</li>
        </ul>
        <p>Los pagos electronicos son todos aquellos que no involucran efectivo, cuando hablamos de pagos electronicos nos referimos normalmente a tarjetas y las cuentas o billeteras digitales.</p>
        <p><strong>Las tarjetas: </strong> Hay targetas fisicas las que llevamos en la billetera, y las digitales son
          como las aplicaciones que estan instaladas en nuestro celular como una cuenta banco por ejemplo.</p>
        <h3>Tipos de tarjetas(banco)</h3>
        <ul>
          <li><strong>Devito</strong> Solo puedes gastar lo que tienes en tu cuenta bancaria. No permiten prestamos a cuotas ni intereses, si se puede usar para compras online sin embargo hay bancos que no dejan este feature.</li>
          <li><strong>Crédito</strong> Ofrecen, dinero que no lo tienes necesariamente en tu cuenta. Si aplica para cuotas,promociones y compras online.</li>
        </ul>
        <h3>Billeteras digitales o cuentas</h3>
        <p>Las billeteras digitales son como una cuenta bancaria en este caso no te dan tarjeta, sino que esta de manera electronica en tu celular en modo de aplicacion,
          es un monedero o billetera digital que la puedes asociar a tu cuenta bancaria y puedes recibir pagos mediante código QR, mediante transacciónes,
          transferencias bancarias o criptomonedas.</p>
        <h3>Para recibir pagos</h3>
        <p>
          <ul>
            <li>Necesitas utilizar una app en tu celular.</li>
            <li>Algunas requieren equipo especializado.</li>
          </ul>
        </p>
      </section>

      <section className='creditcards_container'>
        <h2>Como es que el dinero
          pasa de una cuenta a otra</h2>
        <p className='re'>Recuerda que en este punto el dinero esta representado por ceros y unos (codigo binario)</p>
        <div>
          <Tarjetas_de_debito />
          <p>El primer paso es cuando tu realizas tu pago por linea,
            y se manda un requerimiento al banco a traves de la red
            de debito el banco revisa que tenga el balance en su cuenta,
            se aprueba la solicitud entonces el comerciante recibe el pago
            por esa transaccion.</p>
        </div>
        <div>
          <Tarjeta_de_credito />
          <p>
            El usuario hace una transaccion, esa informacion se transmite a
            un intermediario como visa o mastercard le envian una cuenta por
            cobrar al emisor de la tarjeta el banco recibe y la envia posteriomente
            al usuario que esta solicitando, en paralelo que el intermediario mando
            la solicitud al banco revisa y le transfiere los fondos al comercio luego
            el banco emisor de la tarjeta le regresa la plata a visa o mastercard, una vez
            que el usuario le paga al banco esa deuda ya queda cubierta por total.
          </p>
        </div>
        <div>
          <Billetera />
          <p>
            Pones dinero en tu cuenta digital mediante el banco, y tienes opcion de
            hacer un pago por codigo QR o Bar Code, puedes hacer una transferencia, a
            otra cuenta digital o billetera, y puedes retirar tu dinero mediante cajeros
            electronicos escaneando el codigo que genera tu aplicacion movil.
          </p>
        </div>
        <div>
          <p>
            <i>
              Parece que esto suena un poco complicado de entender, sim embargo para emprendedor
              comerciante es que esto es mas sencillo de utilizar.
            </i>
          </p>
          <h3>Pasarelas de pago</h3>
          <p>Estas pasarelas de pago que son empresas, se encargan de todo este proceso que vimos,
            A cambio de una pequeña comision por el servicio que hacen.
          </p>
          <ul>
            <li>Capturan los fondos por ti.</li>
            <li>Transfieren tus ventas a una cuenta.</li>
            <li>Todo esto por una comision.</li>
          </ul>
          <h3>Recibir Pagos</h3>
          <ul>
            <li>
              <p>
                <strong>Equipo especializado o software: </strong>Son puntos de venta, datafono, o terminales
                que te facilitan los bancos o empresas a quienes das ese servicio permiten cobrar estos pagos
                ya sea con tarjetas de credito o billeteras mediante codigos QR o Bar Code.
              </p>
            </li>
            <li>
              <p>
                <strong>Pagos online: </strong>
                Son pasarelas como Stripe, Paypal, payU, Mercado Pago y muchas otras en todo el mundo,
                con estas integraciones te permiten realizar cobros internacionales y locales
              </p>
            </li>
          </ul>
          <h3>La comisión</h3>
          <ul>
            <li>Es una tarifa que cobran por el servicio.</li>
            <li>Por cada transaccion + un plus + un impuesto.</li>
            <li>Renta de equipo o servicio de los bancos. (No son aconsejables por su alta comisión)</li>
          </ul>
        </div>
      </section>

      <section>
        <div>
          <h2>Regulación fiscal e impuestos</h2>
          <p>Tener un negocio es pagar impuestos, regularse fiscalmente significa que tienes que pagar tus
            impuestos y cobrar impuestos respectivamente, esta es la razon #1 para que las personas prefieran
            un negocio informal.
          </p>
          <strong>Cuando empiezes un negocio te enfrenteras a dos tipos  de impuestos comunes: </strong>
          <ul>
            <li>
              <p>
                <strong>Ganancias (ISR)</strong>
                Impuesto sobre las rentas que se aplica sobre las ganancias que estas obteniendo.
              </p>
            </li>
            <li>
              <p>
                <strong>Ventas(IVA/IGV)</strong>
                Es un impuesto que tu transfieres a tus clientes cuando te pagan por un producto o servicio.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3>Registro de contribuyente</h3>
          <p>Necesitas un registro de contribuyentes un tramite con la entidad fiscal de forma que te den un
            identificador unico tributario con el cual tu puedes empezar a hacer todo este tipo pagos, cobros, etc.
          </p>
          <h3>Emisión de facturas</h3>
          <p>La factura es el comprobante que respalda que hubo una compra y que se pagaron los impuestos correspondientes
            a esa transaccion
          </p>
          <ul>
            <li>
              Emitir una factura por cada venta que realizes porque es el derecho de tus clientes el poder tener este comprobante
              para utilizarlo en su declaracion anual de impuestos.
            </li>
            <li>
              Revisar si en tu pais se aplica la emision de facturas electronicas.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>¿Qué metodo de pago deberia elegir y que pasarela contratar?</h2>
        <p>
          Antes de elegir un metodo de pago para  y una pasarela necesitamos evaluar nuestro negocio considerando lo siguiente:
          <ul>
            <li>
              <strong>Tipo de negocio: </strong>
              Aqui tenemos dos opciones que sea una <i>tienda física</i> donde vas a recibir personas y va haber un contacto y
              donde vas hacer un servicio a domicilio, la otra es una <i>tienda online</i> donde no va haber un contacto entre ti y tus clientes
              no existe un lugar donde la gente pueda ir fisicamente a realizar una compra.
            </li>
            <li>
              <strong>Volumen de ventas: </strong>
              Es importante considerarlo porque las pasarelas de pago te van a cobrar una transaccion por cada transferencia que tu realices
              y tambien para implementar tus medidas de seguridad.

            </li>
            <li>
              <strong>Si contamos con un equipo de desarrollo técnico: </strong>
              Esto te va a servir para personalizar mucho mas tu negocio y poderlo escalar mucho mas rapido
            </li>
          </ul>
          Para elegir una pasarela de pago necesitaremos hacer una comparativa
          <ul>
            <li><strong>Los metodos de pago: </strong>Que vas a aceptar en tu negocio puede ser tarjetas, billeteras o criptomonedas.</li>
            <li><strong>Costos: </strong>Revisar cuales son los costos, contracargos, comisiones que puedan llegar hacer un problema en un futuro.</li>
            <li><strong>Opciones de cobro: </strong>Tenerlo claro las opciones de pago que las pasarelas de pago te brindan y asi tu puedas brindarles esos mismos servicios a tus clientes.</li>
            <li><strong>Local o internacional: </strong>Considerar si queremos expandir nuestro negocio a mas lugares.</li>
          </ul>
        </p>
      </section>


      <section>
        <h2>Pagos online sin código</h2>
        <p>
          Vamos a necesitar un télefono y whatsapp estas pasarelas de pago nos ofreceran enlaces de pago para que nosotros mandemos a nuestro cliete y el haga la transferencia tambien
          esta la posibilidad de recibir mediante billeteras digitales, QRs o barras de codigo no necesitaras conocimiento de desarrolo en lo absoluto.
          Algunos de estos servicios son: <strong>Clip, Mercado pago, Paypal o RedEnlace entre muchas otras posiblidades.</strong>
        </p>

      </section>

      <section>
        <h2>Resumen</h2>
        <p>
          El dinero funciona porque todos creen en el imaginario colectivo de todos los habitantes del planeta que el dinero tiene que tener un valor y gracias a esto se creo el sistema
          de confianza mas effectivo de la historia de la humanidad, el dinero hoy es practicamente digital, los billetes y monedas que tenemos
          en los bolsillos no tienen valor sino que su valor esta respaldado por la confianza que generan nuestros gobiernos y el tenerlos almacenados de manera
          electronica en las bases de datos.
          Digitalizar nuestro negocio tiene como beneficio dejar de depender del efectivo y llegar a nuevas audiencia al ofrecer medios de pago que se alinien con sus
          nuevos habitos de consumo.
        </p>
      </section>


    </section>
    <style jsx>{`
    .container {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.2rem;
      font-size: 1.3rem;
      text-align: center;
      background-color: #eee;
      letter-spacing: .5px;
      line-height: 1.5;

    }
    hr {
      height: 5px;
      width: 100%;
      background-color: #00baff;
      max-width: 600px;
    }
    p {
      text-align: start;
    }

    p .re {
      text-align: center;
    }
    .creditcards_container {
      width: 100%;
    }
    li {
      text-align: start;
    }
    h2 {
      width: 65%;
      margin: 0 auto;
    }
  `}</style>
  </>
}