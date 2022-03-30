import React from 'react'
import { GrPowerCycle } from 'react-icons/gr';
import { FiTruck } from 'react-icons/fi';
import { MdComputer } from 'react-icons/md'

function Features() {
    return (
      <section className="my-16 features">
            <div className="w-4/5 m-auto text-primary-dark">
            <h3 className="text-3xl font-bold tracking-[.3rem] py-8 uppercase flex items-center justify-center text-secondary-dark"> 
                Why shop with GPU Haven?
            </h3>
            <div className="flex flex-wrap items-center justify-between p-16 text-xl w-50">
                <div className="flex items-center gap-3 p-2 item">
                    <GrPowerCycle className="w-12 h-12 fill-primary-dark" />
                    <div className="flex flex-col items-start">
                        <p className="uppercase">Free Returns!</p>
                        <p className="text-secondary-light">30 days money back guarantee!</p>
                    </div>
                    </div>
                <div className="flex items-center gap-3 p-2 item">
                    <FiTruck className="inline-block w-12 h-12" />
                    <div className="flex flex-col items-start">
                        <p className="uppercase">Free Shipping!</p>
                        <p className="text-secondary-light">Free shipping on all orders!</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 p-2 item">
                    <MdComputer className="inline-block w-12 h-12" />
                    <div className="flex flex-col items-start">
                        <p className="uppercase">24/7 Technical Support</p>
                        <p className="text-secondary-light">Online support 24 hours a day!</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Features