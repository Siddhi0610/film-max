import "./Product.css";

function Product() {
  return (
    <div className="product-page">
      <h1>Choose Your Plan</h1>

      <div className="pricing-container">

        <div className="pricing-card">
          <h3>Indie Crew</h3>
          <h1>₹0/mo</h1>

          <ul>
            <li>Single Active Production Cycle</li>
            <li>4 Accessible Departments</li>
            <li>10 Crew Accounts </li>
           
          </ul>

          <button>Get Started</button>
        </div>


        <div className="pricing-card">
          <h3>Studio Slate</h3>
          <h1>₹999/mo</h1>

          <ul>
            <li>Unlimited Active Productions</li>
            <li>6 Accessible Departments</li>
             <li>Scene Funnelling</li>
            <li>Role Based Access Control</li>
            <li>Cross-Department Progress Tracking</li>
            <li>Priority support</li>
          </ul>

          <button>Get Started</button>
        </div>

      </div>
    </div>
  );
}

export default Product;