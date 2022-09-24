import '../styles/contact.css'

export default function Contact () {
    return (
        <div className="contact-page">
            <form action="">
                <div className='correo' >
                    <p>Correo Electronico </p>
                    <input type="email" name="email" id="txtEmail" />
                </div>

                <div className='texto' >
                    <p className='descripcion'>Descripcion</p>
                    <textarea name="description" cols="50" rows="5">

                    </textarea>
                </div>

                <input type="submit" value="Enviar" id="boton-enviar" />
            </form>
        </div>
    );
}
