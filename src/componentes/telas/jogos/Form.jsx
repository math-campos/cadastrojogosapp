import { useContext } from "react";
import Alerta from "../../Alerta";
import JogosContext from "./JogosContext";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";

function Form() {

    const { objeto, handleChange, acaoCadastrar, alerta, listaProdutoras } =
        useContext(JogosContext);

    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()

    return (
        <Dialogo id="modalEdicao" titulo="Jogo" idform="formulario"
            acaoCadastrar={acaoCadastrar}>
            <Alerta alerta={alerta} />
            <CampoEntrada id="txtCodigo" label="Código" tipo="number"
                name="codigo" value={objeto.codigo}
                onchange={handleChange} requerido={false}
                readonly={true} tamanho={5}
                msgvalido=""
                msginvalido="" />
            <CampoEntrada id="txtNome" label="Nome" tipo="text"
                name="nome" value={objeto.nome}
                onchange={handleChange} requerido={true}
                readonly={false} tamanho={5}
                msgvalido="Campo nome OK"
                msginvalido="Campo nome é obrigatório" />
            <CampoEntrada id="txtDescricao" label="Descrição" tipo="text"
                name="descricao" value={objeto.descricao}
                onchange={handleChange} requerido={true}
                readonly={false} tamanho={40}
                msgvalido="Campo descrição OK"
                msginvalido="Campo descrição é obrigatório" />
            <CampoEntrada id="txtEstrelas" label="Estrelas"
                tipo="number"
                name="estrelas" value={objeto.estrelas}
                onchange={handleChange} requerido={true}
                readonly={false} tamanho={5}
                msgvalido="Campo Estrelas OK"
                msginvalido="Campo Estrelas é obrigatório" />
            <div className="form-group">
                <label htmlFor="selectProdutora" className="form-label">
                    Produtora
                </label>
                <select required className="form-control"
                    name="produtora" value={objeto.produtora} id="selectProdutora"
                    onChange={handleChange}>
                    <option disable="true" value="">
                        (Selecione a produtora)
                    </option>
                    {listaProdutoras.map((produtora) => (
                        <option
                            key={produtora.codigo} value={produtora.codigo}>
                            {produtora.nome}
                        </option>
                    ))
                    }
                </select>
                <div className="valid-feedback">
                    Campo Produtora OK
                </div>
                <div className="invalid-feedback">
                    Selecione uma produtora
                </div>
            </div>
        </Dialogo>
    )
}

export default Form;