import { CheckCircle } from 'lucide-react'
import React from 'react'

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-white to-blue-100">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <img
            src="https://storage.googleapis.com/a1aa/image/hOEAAEnjleY_rtuL6VYia-k8ErosIIHe3yJGq-KuR_w.jpg"
            alt="Doctor showing an X-ray to a patient"
            className="rounded-lg shadow-lg "
          />
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-8">
          {/* <div className="relative">
            <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg p-4">
              <div className="text-center ">
                <CheckCircle className="text-blue-500 text-2xl" />
                <p className="text-sm text-gray-500">High Quality</p>
                <p className="text-sm text-gray-500">Professionals</p>
              </div>
            </div>
          </div> */}
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <h2 className="text-xl text-blue-600 mt-2">PRO HEALTH</h2>
          <p className="text-gray-600 mt-4">
            <span className="text-blue-500">
              <CheckCircle className="inline-block" />
            </span>
            ProHealth is a team of experienced medical professionals
          </p>
          <p className="text-gray-600 mt-4">
            Dedicated to providing top-quality healthcare services. We believe in a holistic approach to healthcare that focuses on treating the whole person, not just the illness or symptoms.
          </p>
          <div className="mt-8">
            <img
              src="https://storage.googleapis.com/a1aa/image/nQm8quSPA4d4eJ0JRkJRR2HwhJLmLcOekpW73MUAKoE.jpg"
              alt="Smiling doctor with stethoscope"
              className="rounded-full border-4 border-white shadow-lg w-[150px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutUs
