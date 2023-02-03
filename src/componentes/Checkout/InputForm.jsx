import "bootstrap/dist/css/bootstrap.css"

export default function InputForm(props) {
  return (
    <div className="mb-3 row justify-content-center p-2 text-start">
      <div className="col-8">
        <label className="form-label">{props.label}</label>
      </div>
      <div className="col-8">
        <input
          value={props.value}
          className="form-control"
          name={props.name}
          type="text"
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}