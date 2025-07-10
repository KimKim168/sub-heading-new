import React from 'react'
import Layout from '../layout/MyLayout'
import { Button } from '@/components/ui/button'
import { Download, Apple, PlaySquare } from "lucide-react";

const Index = () => {
  return (
    <Layout>
  <div className="flex flex-col items-center justify-start py-20 px-5 lg:px-0">
      {/* Hero Section */}
      <div className="text-center mb-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Transform Your Communication <br /> with Instant Connectivity
        </h1>
        <p className="text-gray-600 mb-6">
          Install Snappy on all your devices to stay engaged and continue every conversation.
        </p>
        <Button className="px-6 py-2 text-base rounded-full">
          <Download className="w-4 h-4 mr-2" /> Download Now
        </Button>
      </div>

      {/* Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* PC / Mac */}
        <div className="bg-blue-600 text-white rounded-xl p-6 flex flex-col justify-between shadow">
          <div>
            <div className="mb-2 text-white/70">Desktop</div>
            <h3 className="text-xl font-semibold mb-2">PC/Mac</h3>
            <p className="text-sm">
              Stay ahead with quick, adaptable communication strategies for evolving business landscapes.
            </p>
          </div>
          <Button variant="outline" className="mt-6 w-fit bg-white text-blue-600 hover:bg-gray-100">
            <Download className="w-4 h-4 mr-2" /> Download
          </Button>
        </div>

        {/* iOS */}
        <div className="bg-primary-foreground rounded-xl p-6 shadow flex flex-col justify-between">
          <div>
            <div className="mb-2 text-gray-600 dark:text-gray-400">Mobile Phone</div>
            <h3 className="text-xl font-semibold mb-2">iOS</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Stay ahead with quick, adaptable communication strategies for evolving business landscapes.
            </p>
          </div>
          <a
            href="#"
            className="mt-6 w-fit inline-flex items-center gap-2 px-4 py-2 border border-primary rounded-md text-sm font-medium hover:scale-105 duration-700 text-primary"
          >
            <Apple className="w-4 h-4" /> App Store
          </a>
        </div>

        {/* Android */}
        <div className="bg-primary-foreground rounded-xl p-6 shadow flex flex-col justify-between">
          <div>
            <div className="mb-2 text-gray-600 dark:text-gray-400">Mobile Phone / Tablet</div>
            <h3 className="text-xl font-semibold mb-2">Android</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Stay ahead with quick, adaptable communication strategies for evolving business landscapes.
            </p>
          </div>
          <a
            href="#"
            className="mt-6 w-fit inline-flex items-center gap-2 px-4 py-2 border border-primary rounded-md text-sm font-medium hover:scale-105 duration-700 text-primary"
          >
          <PlaySquare className="w-4 h-4"/>  Google Play
          </a>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Index
