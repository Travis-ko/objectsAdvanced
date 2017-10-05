// calculateSalesTax takes in an objecct and an array. The object has province abbreviations as keys, and sales tax rates as values.
// The array contains objects with name (str), province (str) and sales (int) as keys.
//
// The function returns an object with the company name (str), total sales, and total tax. The total sales are the sum of all sales
// the company made, and the total tax is that total of all sales tax paid on sales, based on the province's tax rate
// 1. Need to find the appropriate tax rate find companySalesData.each.province in salesTaxRates
// 2. Return sum of total sales for each company - Telus amounts need to be combined
// 3. Return totalSales * taxRate
function calculateSalesTax(salesData, taxRates) {
var output = {}
var total = totalSales(salesData)
var taxRate = taxLookup(salesData, taxRates)
var taxes = taxCalc(salesData)

for (each in salesData){
  var outputLog = {};
  output.Company = salesData[each].name;
  output.Sales = salesData[each].Sum;
  output.Tax = salesData[each].Tax
  if(outputLog.hasOwnProperty(salesData[each].name)){
    console.log("found");
     outputLog[salesData[each].name].Sales += output.Sales;
  } else {
    outputLog[salesData[each].name] = output;
  }
}
console.log(outputLog);
}
function totalSales(companySalesData){
    var result  = 0;
  for(var x = 0; x<companySalesData.length; x++){
    result += companySalesData[x];
  }
  return result;
}

function taxLookup(province, sales){
  var rate = salesTaxRates[province];
  var tax = sales * rate;
  return tax;
}
function taxCalc(sales){
  var companySales = 0;
  var outputResult = {};
  var totalTaxes = 0;

  for(var x = 0; x<companySalesData.length; x++){
    companySales = 0;
    companySales = totalSales(companySalesData[x].sales);
    totalTaxes = 0;
    totalTaxes = taxLookup(companySalesData[x].province, companySales);

    var temp = {};
    temp.totalSales = companySales;
    temp.totalTaxes = totalTaxes;
    if(outputResult.hasOwnProperty(companySalesData[x].name)){
      outputResult[companySalesData[x].name].totalSales =  outputResult[companySalesData[x].name].totalSales + temp.totalSales;
      outputResult[companySalesData[x].name].totalTaxes =  outputResult[companySalesData[x].name].totalTaxes + temp.totalTaxes;

    } else{
      outputResult[companySalesData[x].name] = temp;
    }
  }
  console.log(outputResult);
}

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
taxCalc(companySalesData);