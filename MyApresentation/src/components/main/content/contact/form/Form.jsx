import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Forms = () => (
  <>
    <Formik
      initialValues={{ name: "", email: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = "Campo obrigatório!";
        }

        if (!values.email) {
          errors.email = "Campo obrigatório!";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "E-mail inválido!";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(`Formulário enviado com sucesso!! \nEm breve entrarei em contato. \nDesde já, muito obrigado pelo contato ${JSON.stringify(values.name)}!`);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="c-form">
          <div className="c-form__group">
            <label htmlFor="name" className="c-form__label">
              Nome
            </label>
            <Field
              type="name"
              placeholder="Digite seu nome"
              name="name"
              className="c-form__control"
            />
          </div>

          <ErrorMessage name="name" component="div" className="c-form__error" />

          <div className="c-form__group">
            <label htmlFor="email" className="c-form__label">
              E-mail
            </label>
            <Field
              type="email"
              placeholder="Digite seu e-mail"
              name="email"
              className="c-form__control"
            />
          </div>

          <ErrorMessage
            name="email"
            component="div"
            className="c-form__error"
          />

          <div className="c-form__group">
            <label htmlFor="subject" className="c-form__label">
              Assunto
            </label>
            <select
              id="subject"
              className="c-form__control"
              defaultValue="Qual o assunto?"
            >
              <option value="Qual o assunto?" disabled>
                Qual o assunto?
              </option>
              <option value="orcamento" >Orçamento</option>
              <option value="oportunidade" >Oportunidade</option>
              <option value="parceria" >Parcerias</option>
            </select>
          </div>

          <div className="c-form__group">
            <label htmlFor="messager" className="c-form__label">
              Mensagem
            </label>
            <Field
              as="textarea"
              name="textarea"
              rows="5"
              placeholder="Se desejar, explique-me melhor..."
              id="messager"
              className="c-form__control"
            />
          </div>

          <div className="c-form__group">
            <button type="submit" className="c-btn" disabled={isSubmitting}>
              Enviar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </>
);

export default Forms;