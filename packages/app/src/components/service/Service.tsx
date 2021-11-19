import './Service.css';

export default function Service (state:any) {
  console.log(state)
    return (
        <div className="Page">
          <h1>Service</h1>
          <p>Backend Service Output</p>
          <div>
            <ul>
              <li>Echo On</li>
            </ul>
          </div>
        </div>
    );
  };