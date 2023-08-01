import { useFormik } from "formik";
import Card from "./card";
import { basicSchema } from "../schemas/yup";
import { useNavigate } from "react-router-dom";


function Index() {
  const navigate = useNavigate();



  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    },
    validationSchema: basicSchema,
    onSubmit: () => {
      navigate("/Success");
    },
  });

 
  
  

  return (
    <div className="main">
      <Card />

      <section className="right-side">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">CardHolder Name</label>
            <input
              type="text"
              id="name"
              placeholder="e.g Jane Appleseed"
              onChange={handleChange}
              value={values.name}
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <p className="error">{errors.name}</p>}

 
          </div>
          <div className="form-control">
            <label htmlFor="number">Card Number</label>
            <input
              type="number"
              id="number"
              value={values.number}
              onChange={handleChange}
              placeholder="e.g 1234 5678 9123 0000"
              className={errors.number ? "input-error" : ""}
            />
            {errors.number && <p className="error">{errors.number}</p>}
          </div>

          <div className="card-year">
            <div className="form-control">
              <label htmlFor="month">Exp. Date (MM/YY)</label>
              <input
                type="number"
                id="month"
                placeholder="MM"
                value={values.month}
                onChange={handleChange}
                className={errors.month ? "input-error" : ""}
              />

              <input
                type="number"
                id="year"
                placeholder="YY"
                onChange={handleChange}
                value={values.year}
                className={errors.year ? "input-error" : ""}
              />

              {errors.month && <p className="error">{errors.month}</p>}
            </div>

            <div className="form-control">
              <label htmlFor="cvc">CVC</label>
              <input
                type="number"
                placeholder="e.g 123"
                id="cvc"
                value={values.cvc}
                onChange={handleChange}
                className={errors.cvc ? "input-error" : ""}
              />
              {errors.cvc && <p className="error">{errors.cvc}</p>}
            </div>
          </div>

          <button type="submit" className="btn-submit" onClick={handleSubmit}>
            Confirm
          </button>
        </form>
      </section>
    </div>
  );
}

export default Index;
