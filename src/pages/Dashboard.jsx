 
import ReactApexChart from 'react-apexcharts'; // Make sure to import the chart library
 

const Dashboard = () => {
 
  
 

  // You can add your token verification logic here if necessary
 

  
 
  const chartOptions = {
    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'series2',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    }
  };

  return (
    <div className=" w-[100%] max-w-[1500px]">
      <h1 className="font-[900] text-[32px] my-10">Dashboard</h1>
      <div className="flex flex-wrap justify-between gap-4">
  <div className="flex flex-col justify-center self-start min-w-[240px] w-[947px] max-md:max-w-full">
    <div className="flex flex-wrap gap-3 items-start w-full whitespace-nowrap max-w-[947px] max-md:max-w-full">
      <div className="flex flex-1 shrink gap-4 items-start px-12 py-7 bg-red-50 rounded max-md:px-8">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20b86fe47e2d876e21bd858e1bf17d182f8fe64892632816e54f6518a567e984?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-contain shrink-0 w-12 aspect-square"
        />
        <div className="flex flex-col flex-1 shrink basis-0">
          <div className="text-sm leading-none text-gray-500">Sales</div>
          <div className="text-2xl font-bold leading-none text-gray-900">
            $152k
          </div>
        </div>
      </div>
      <div className="flex flex-1 shrink gap-4 items-start px-12 py-7 bg-amber-50 rounded basis-0 max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc1b73afb01db74517f1227ccc84a04776c757eeb86411c53f7240cf0913d981?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-contain shrink-0 w-12 aspect-square"
        />
        <div className="flex flex-col flex-1 shrink basis-0">
          <div className="text-sm leading-none text-gray-500">Cost</div>
          <div className="text-2xl font-bold leading-none text-gray-900">
            $99.7k
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-1 shrink gap-4 items-start px-12 py-7 bg-teal-50 rounded basis-0 max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/52382b3aa3c152601e9b6239791260e1b0d5bba87c15f59d68c8595deef1cd10?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-contain shrink-0 w-12 aspect-square"
        />
        <div className="flex flex-col flex-1 shrink basis-0">
          <div className="text-sm leading-none text-gray-500">Profit</div>
          <div className="text-2xl font-bold leading-none text-gray-900">
            $32.1k
          </div>
        </div>
      </div>
    </div>

    <div className="my-10 w-[100%]">
      <h2 className="text-xl font-bold">Chart</h2>
      <div id="chart">
        <ReactApexChart
          options={chartOptions.options}
          series={chartOptions.series}
          type="area"
          height={450}
        />
      </div>
    </div>
  </div>


  <div className="flex flex-col px-4 pt-3 pb-10 rounded border border-solid border-black border-opacity-10 h-full min-w-[240px] w-[530px]">
    <div className="flex gap-8 justify-between items-center w-full font-semibold text-gray-900">
      <div className="self-stretch my-auto text-base">Top selling products</div>
      <div className="flex gap-2 self-stretch px-3 py-2 my-auto text-sm leading-6 text-center rounded-xl w-[91px]">
        <div>See All</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/989ffd058afab83606c81dd5a4d7a621b6ca4bdad07d69f5f14e570614fc03ca?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
          className="object-contain shrink-0 my-auto aspect-square w-[18px]"
        />
      </div>
    </div>
    <div className="flex flex-col mt-4 w-full text-sm leading-loose">
      <div className="flex gap-3 items-center w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9191ec1dfd9fd90ff803a576781465d564d41a58a6bee7d2d96b981bcae0e4fb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9191ec1dfd9fd90ff803a576781465d564d41a58a6bee7d2d96b981bcae0e4fb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9191ec1dfd9fd90ff803a576781465d564d41a58a6bee7d2d96b981bcae0e4fb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9191ec1dfd9fd90ff803a576781465d564d41a58a6bee7d2d96b981bcae0e4fb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w"
          className="object-contain shrink-0 self-stretch my-auto rounded-lg aspect-[0.96] w-[52px]"
        />
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
          <div className="font-medium text-gray-900">Healthcare Erbology</div>
          <div className="text-gray-500">in Accessories</div>
        </div>
        <div className="flex flex-col justify-center items-end self-stretch my-auto">
          <div className="font-medium text-emerald-500">13,153</div>
          <div className="text-gray-500">in sales</div>
        </div>
      </div>

      <div className="flex gap-3 items-center mt-5 w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9191ec1dfd9fd90ff803a576781465d564d41a58a6bee7d2d96b981bcae0e4fb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w"
          className="object-contain shrink-0 self-stretch my-auto rounded-lg aspect-[0.96] w-[52px]"
        />
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
          <div className="font-medium text-gray-900">Healthcare Erbology</div>
          <div className="text-gray-500">in Accessories</div>
        </div>
        <div className="flex flex-col justify-center items-end self-stretch my-auto">
          <div className="font-medium text-emerald-500">13,153</div>
          <div className="text-gray-500">in sales</div>
        </div>
      </div>

      <div className="flex gap-3 items-center mt-5 w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9191ec1dfd9fd90ff803a576781465d564d41a58a6bee7d2d96b981bcae0e4fb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w"
          className="object-contain shrink-0 self-stretch my-auto rounded-lg aspect-[0.96] w-[52px]"
        />
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
          <div className="font-medium text-gray-900">Healthcare Erbology</div>
          <div className="text-gray-500">in Accessories</div>
        </div>
        <div className="flex flex-col justify-center items-end self-stretch my-auto">
          <div className="font-medium text-emerald-500">13,153</div>
          <div className="text-gray-500">in sales</div>
        </div>
      </div>
      
      <div className="flex gap-3 items-center mt-5 w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9191ec1dfd9fd90ff803a576781465d564d41a58a6bee7d2d96b981bcae0e4fb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w"
          className="object-contain shrink-0 self-stretch my-auto rounded-lg aspect-[0.96] w-[52px]"
        />
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
          <div className="font-medium text-gray-900">Healthcare Erbology</div>
          <div className="text-gray-500">in Accessories</div>
        </div>
        <div className="flex flex-col justify-center items-end self-stretch my-auto">
          <div className="font-medium text-emerald-500">13,153</div>
          <div className="text-gray-500">in sales</div>
        </div>
      </div>

      <div className="flex gap-3 items-center mt-5 w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9191ec1dfd9fd90ff803a576781465d564d41a58a6bee7d2d96b981bcae0e4fb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w"
          className="object-contain shrink-0 self-stretch my-auto rounded-lg aspect-[0.96] w-[52px]"
        />
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
          <div className="font-medium text-gray-900">Healthcare Erbology</div>
          <div className="text-gray-500">in Accessories</div>
        </div>
        <div className="flex flex-col justify-center items-end self-stretch my-auto">
          <div className="font-medium text-emerald-500">13,153</div>
          <div className="text-gray-500">in sales</div>
        </div>
      </div>
      
      <div className="flex gap-3 items-center mt-5 w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9191ec1dfd9fd90ff803a576781465d564d41a58a6bee7d2d96b981bcae0e4fb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w"
          className="object-contain shrink-0 self-stretch my-auto rounded-lg aspect-[0.96] w-[52px]"
        />
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
          <div className="font-medium text-gray-900">Healthcare Erbology</div>
          <div className="text-gray-500">in Accessories</div>
        </div>
        <div className="flex flex-col justify-center items-end self-stretch my-auto">
          <div className="font-medium text-emerald-500">13,153</div>
          <div className="text-gray-500">in sales</div>
        </div>
      </div>

       
    </div>
  </div>
</div>
 
<div className="flex flex-wrap gap-4">
      <div className="flex overflow-hidden flex-col flex-1 shrink self-start p-5 rounded border border-solid basis-0 border-black border-opacity-10 min-w-[240px] max-md:max-w-full">
        <div className="text-base font-semibold text-gray-900">
          Recent Transactions
        </div>
        <div className="flex flex-col mt-2 w-full text-sm leading-none max-md:max-w-full">
          <div className="flex overflow-hidden gap-10 justify-between items-start pt-1 pr-4 pb-3 w-full text-gray-500 whitespace-nowrap border-b border-black border-opacity-10 max-md:max-w-full">
            <div className="w-[100px]">Name</div>
            <div>Date</div>
            <div>Amount</div>
            <div>Status</div>
          </div>
          <div className="flex flex-col pt-2 w-full text-gray-900 max-md:max-w-full">
            <div className="flex overflow-hidden gap-10 justify-between items-center py-2.5 w-full bg-white max-md:max-w-full">
              <div className="self-stretch my-auto font-medium w-[100px]">
                Jagarnath S.
              </div>
              <div className="self-stretch my-auto w-20">24.05.2023</div>
              <div className="self-stretch my-auto w-[60px]">$124.97</div>
              <div className="overflow-hidden self-stretch px-2 py-0.5 my-auto text-center text-emerald-600 whitespace-nowrap bg-emerald-100 rounded w-[70px]">
                Paid
              </div>
            </div>
            <div className="flex overflow-hidden gap-10 justify-between items-center py-2.5 w-full bg-white max-md:max-w-full">
              <div className="self-stretch my-auto font-medium w-[100px]">
                Anand G.
              </div>
              <div className="self-stretch my-auto w-20">23.05.2023</div>
              <div className="self-stretch my-auto w-[60px]">$55.42</div>
              <div className="flex flex-col self-stretch my-auto text-center text-gray-500 whitespace-nowrap w-[70px]">
                <div className="px-2 py-0.5 rounded bg-slate-200">Pending</div>
              </div>
            </div>
            <div className="flex overflow-hidden gap-10 justify-between items-center py-2.5 w-full bg-white max-md:max-w-full">
              <div className="self-stretch my-auto font-medium w-[100px]">
                Kartik S.
              </div>
              <div className="self-stretch my-auto w-20">23.05.2023</div>
              <div className="self-stretch my-auto w-[60px]">$89.90</div>
              <div className="flex flex-col self-stretch my-auto text-center text-emerald-600 whitespace-nowrap w-[70px]">
                <div className="px-2 py-0.5 bg-emerald-100 rounded">Paid</div>
              </div>
            </div>
            <div className="flex overflow-hidden gap-10 justify-between items-center py-2.5 w-full bg-white max-md:max-w-full">
              <div className="self-stretch my-auto font-medium w-[100px]">
                Rakesh S.
              </div>
              <div className="self-stretch my-auto w-20">22.05.2023</div>
              <div className="self-stretch my-auto w-[60px]">$144.94</div>
              <div className="flex flex-col self-stretch my-auto text-center text-gray-500 whitespace-nowrap w-[70px]">
                <div className="px-2 py-0.5 rounded bg-slate-200">Pending</div>
              </div>
            </div>
            <div className="flex overflow-hidden gap-10 justify-between items-center py-2.5 w-full bg-white max-md:max-w-full">
              <div className="self-stretch my-auto font-medium w-[100px]">
                Anup S.
              </div>
              <div className="self-stretch my-auto w-20">22.05.2023</div>
              <div className="self-stretch my-auto w-[60px]">$70.52</div>
              <div className="flex flex-col self-stretch my-auto text-center text-emerald-600 whitespace-nowrap w-[70px]">
                <div className="px-2 py-0.5 bg-emerald-100 rounded">Paid</div>
              </div>
            </div>
            <div className="flex overflow-hidden gap-10 justify-between items-center py-2.5 w-full bg-white max-md:max-w-full">
              <div className="self-stretch my-auto font-medium w-[100px]">
                Jimmy P.
              </div>
              <div className="self-stretch my-auto w-20">22.05.2023</div>
              <div className="self-stretch my-auto w-[60px]">$70.52</div>
              <div className="flex flex-col self-stretch my-auto text-center text-emerald-600 whitespace-nowrap w-[70px]">
                <div className="px-2 py-0.5 bg-emerald-100 rounded">Paid</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col flex-1 shrink p-5 rounded border border-solid basis-0 border-black border-opacity-10 min-w-[240px] max-md:max-w-full">
        <div className="text-base font-semibold text-gray-900">
          Top Products by Units Sold
        </div>
        <div className="flex flex-col mt-2 w-full text-sm leading-none max-md:max-w-full">
          <div className="flex overflow-hidden gap-10 justify-between items-start pt-1 pb-3 w-full text-gray-500 whitespace-nowrap bg-white border-b border-black border-opacity-10 max-md:max-w-full">
            <div className="w-[210px]">Name</div>
            <div>Price</div>
            <div>Units</div>
          </div>
          <div className="flex flex-col pt-2 w-full text-gray-900 max-md:max-w-full">
            <div className="flex overflow-hidden gap-10 justify-between items-center py-2 w-full bg-white max-md:max-w-full">
              <div className="flex gap-3 items-center self-stretch my-auto font-medium w-[210px]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e75b8379164bfe2f0fdea92b8d66ba4df9a8ad5a6ff54261222a7aa2883a2f5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e75b8379164bfe2f0fdea92b8d66ba4df9a8ad5a6ff54261222a7aa2883a2f5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e75b8379164bfe2f0fdea92b8d66ba4df9a8ad5a6ff54261222a7aa2883a2f5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e75b8379164bfe2f0fdea92b8d66ba4df9a8ad5a6ff54261222a7aa2883a2f5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e75b8379164bfe2f0fdea92b8d66ba4df9a8ad5a6ff54261222a7aa2883a2f5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e75b8379164bfe2f0fdea92b8d66ba4df9a8ad5a6ff54261222a7aa2883a2f5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e75b8379164bfe2f0fdea92b8d66ba4df9a8ad5a6ff54261222a7aa2883a2f5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e75b8379164bfe2f0fdea92b8d66ba4df9a8ad5a6ff54261222a7aa2883a2f5?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain shrink-0 self-stretch my-auto w-9 rounded-none aspect-square"
                />
                <div className="self-stretch my-auto">Men Grey Hoodie</div>
              </div>
              <div className="self-stretch my-auto">$49.90</div>
              <div className="self-stretch my-auto">204</div>
            </div>
            <div className="flex overflow-hidden gap-10 justify-between items-center py-2 w-full bg-white max-md:max-w-full">
              <div className="flex gap-3 items-center self-stretch my-auto font-medium w-[210px]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/873284bc6a1ae2d2fdfd55576e9bf62cced3fa744f0e8b7fc41e57a88194412d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/873284bc6a1ae2d2fdfd55576e9bf62cced3fa744f0e8b7fc41e57a88194412d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/873284bc6a1ae2d2fdfd55576e9bf62cced3fa744f0e8b7fc41e57a88194412d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/873284bc6a1ae2d2fdfd55576e9bf62cced3fa744f0e8b7fc41e57a88194412d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/873284bc6a1ae2d2fdfd55576e9bf62cced3fa744f0e8b7fc41e57a88194412d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/873284bc6a1ae2d2fdfd55576e9bf62cced3fa744f0e8b7fc41e57a88194412d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/873284bc6a1ae2d2fdfd55576e9bf62cced3fa744f0e8b7fc41e57a88194412d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/873284bc6a1ae2d2fdfd55576e9bf62cced3fa744f0e8b7fc41e57a88194412d?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain shrink-0 self-stretch my-auto w-9 rounded-none aspect-square"
                />
                <div className="self-stretch my-auto">
                  Women Striped T-Shirt
                </div>
              </div>
              <div className="self-stretch my-auto">$34.90</div>
              <div className="self-stretch my-auto">155</div>
            </div>
            <div className="flex overflow-hidden gap-10 justify-between items-center py-2 w-full bg-white max-md:max-w-full">
              <div className="flex gap-3 items-center self-stretch my-auto font-medium w-[210px]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8c99fc0bd70539c27d592838bd002eb675cb7adc6b33d8fd5c20cb140b29abf9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c99fc0bd70539c27d592838bd002eb675cb7adc6b33d8fd5c20cb140b29abf9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c99fc0bd70539c27d592838bd002eb675cb7adc6b33d8fd5c20cb140b29abf9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c99fc0bd70539c27d592838bd002eb675cb7adc6b33d8fd5c20cb140b29abf9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c99fc0bd70539c27d592838bd002eb675cb7adc6b33d8fd5c20cb140b29abf9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c99fc0bd70539c27d592838bd002eb675cb7adc6b33d8fd5c20cb140b29abf9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c99fc0bd70539c27d592838bd002eb675cb7adc6b33d8fd5c20cb140b29abf9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8c99fc0bd70539c27d592838bd002eb675cb7adc6b33d8fd5c20cb140b29abf9?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain shrink-0 self-stretch my-auto w-9 rounded-none aspect-square"
                />
                <div className="self-stretch my-auto">Wome White T-Shirt</div>
              </div>
              <div className="self-stretch my-auto">$40.90</div>
              <div className="self-stretch my-auto">120</div>
            </div>
            <div className="flex overflow-hidden gap-10 justify-between items-center py-2 w-full bg-white max-md:max-w-full">
              <div className="flex gap-3 items-center self-stretch my-auto font-medium w-[210px]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c1b8884a84ca482311268a85579f10c74c25674d9ed88088e82edf1727d611f6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1b8884a84ca482311268a85579f10c74c25674d9ed88088e82edf1727d611f6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1b8884a84ca482311268a85579f10c74c25674d9ed88088e82edf1727d611f6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1b8884a84ca482311268a85579f10c74c25674d9ed88088e82edf1727d611f6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1b8884a84ca482311268a85579f10c74c25674d9ed88088e82edf1727d611f6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1b8884a84ca482311268a85579f10c74c25674d9ed88088e82edf1727d611f6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1b8884a84ca482311268a85579f10c74c25674d9ed88088e82edf1727d611f6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c1b8884a84ca482311268a85579f10c74c25674d9ed88088e82edf1727d611f6?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain shrink-0 self-stretch my-auto w-9 rounded-none aspect-square"
                />
                <div className="self-stretch my-auto">Men White T-Shirt</div>
              </div>
              <div className="self-stretch my-auto">$49.90</div>
              <div className="self-stretch my-auto">204</div>
            </div>
            <div className="flex overflow-hidden gap-10 justify-between items-center py-2 w-full bg-white max-md:max-w-full">
              <div className="flex gap-3 items-center self-stretch my-auto font-medium w-[210px]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a0c54b9bf54ff9edebd27f43aa0dd32e88623075913ceaad869188bdaa75e5cb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c54b9bf54ff9edebd27f43aa0dd32e88623075913ceaad869188bdaa75e5cb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c54b9bf54ff9edebd27f43aa0dd32e88623075913ceaad869188bdaa75e5cb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c54b9bf54ff9edebd27f43aa0dd32e88623075913ceaad869188bdaa75e5cb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c54b9bf54ff9edebd27f43aa0dd32e88623075913ceaad869188bdaa75e5cb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c54b9bf54ff9edebd27f43aa0dd32e88623075913ceaad869188bdaa75e5cb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c54b9bf54ff9edebd27f43aa0dd32e88623075913ceaad869188bdaa75e5cb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a0c54b9bf54ff9edebd27f43aa0dd32e88623075913ceaad869188bdaa75e5cb?placeholderIfAbsent=true&apiKey=e940a6a49e084455a40af88cc6d38123"
                  className="object-contain shrink-0 self-stretch my-auto w-9 rounded-none aspect-square"
                />
                <div className="self-stretch my-auto">Women Red T-Shirt</div>
              </div>
              <div className="self-stretch my-auto">$34.90</div>
              <div className="self-stretch my-auto">155</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
}

export default Dashboard;
 






 
 
  
 



