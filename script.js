document.getElementById('demandForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const sales = parseFloat(document.getElementById('inputSales').value);
    const marketing = parseFloat(document.getElementById('inputMarketing').value);
    const price = parseFloat(document.getElementById('inputPrice').value);
    
    // You would typically send this data to your backend where your ML model is deployed for prediction
    // For demonstration purpose, I'll just calculate a simple linear regression prediction here
    const demand = predictDemand(sales, marketing, price);
  
    // Display the predicted demand
    document.getElementById('predictedDemand').textContent = demand;
    document.getElementById('predictionResult').style.display = 'block';
  });
  
  function predictDemand(sales, marketing, price) {
    // Here you would call your ML model endpoint and get the prediction
    // For simplicity, let's assume a simple linear regression model
    const intercept = 50; // Example intercept coefficient
    const salesCoefficient = 0.8; // Example coefficient for sales
    const marketingCoefficient = 0.3; // Example coefficient for marketing
    const priceCoefficient = -0.5; // Example coefficient for price
    
    // Simple linear regression formula: y = b0 + b1*x1 + b2*x2 + b3*x3 + ...
    const demand = intercept + (salesCoefficient * sales) + (marketingCoefficient * marketing) + (priceCoefficient * price);
    return Math.max(0, demand); // Ensure demand is not negative
  }
  