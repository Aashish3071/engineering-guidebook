import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Radio, Activity, Globe } from "lucide-react";
import { CTABand } from "../../components/site/CTABand";

export const Route = createFileRoute("/services/iot-hardware")({
  head: () => ({
    meta: [
      { title: "IoT Hardware Development & Prototyping | Axiom Electronics" },
      {
        name: "description",
        content:
          "End-to-end IoT hardware design. Custom sensor nodes, gateways, cellular integration, and ultra-low-power connected devices.",
      },
    ],
  }),
  component: IoTHardwarePage,
});

function IoTHardwarePage() {
  return (
    <>
      <section className="bg-navy-deep text-white">
        <div className="container-x pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="max-w-4xl">
            <Link to="/" className="text-accent-amber hover:text-white transition-colors text-sm font-mono tracking-widest uppercase">
              &larr; Back to Home
            </Link>
            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              IoT Hardware & Connected Sensors
            </h1>
            <p className="mt-6 text-white/75 text-lg md:text-xl leading-relaxed max-w-3xl">
              We design intelligent, connected edge devices that bridge the physical and digital worlds. From ultra-low-power battery nodes to high-throughput industrial gateways, we handle the complete hardware stack.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white border-b border-hairline">
        <div className="container-x grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-24 items-start">
          <div className="prose-technical">
            <h2>Bringing intelligence to the edge.</h2>
            <p>
              The Internet of Things requires a delicate balance between power consumption, range, bandwidth, and cost. There is no one-size-fits-all radio protocol or sensor architecture. We engineer custom hardware tailored exactly to your deployment environment and data requirements.
            </p>
            <p>
              Our expertise spans the entire IoT connectivity spectrum, ensuring your devices communicate reliably whether they are deployed in a smart factory, buried underground, or dispersed across agricultural fields.
            </p>

            <h3>Custom Sensor Design</h3>
            <p>
              Off-the-shelf sensors often fail to meet the rigorous demands of specific industrial applications. We design custom Analog Front-Ends (AFE) and integrate precision sensing elements directly onto your PCB. 
            </p>
            <ul>
              <li><strong>Environmental & Agricultural:</strong> Soil moisture, solar irradiance, ambient light, and gas sensing (NDIR, electrochemical).</li>
              <li><strong>Industrial Monitoring:</strong> Vibration (accelerometers), temperature (RTD, thermocouples), and predictive maintenance metrics.</li>
              <li><strong>Energy & Power:</strong> Current transformers (CT), MPPT solar harvesting circuits, and precision energy metering.</li>
            </ul>

            <h3>Connectivity & RF Architecture</h3>
            <p>
              Selecting the right communication protocol is the most critical decision in IoT architecture. We provide agnostic consulting and implementation for:
            </p>
            <ul>
              <li><strong>Short Range (PAN):</strong> Bluetooth Low Energy (BLE 5.x), Zigbee, Thread, and custom sub-GHz protocols.</li>
              <li><strong>Low-Power Wide-Area (LPWAN):</strong> LoRaWAN for private networks, NB-IoT and LTE-M for cellular infrastructure.</li>
              <li><strong>High Bandwidth:</strong> Wi-Fi 6, Cellular LTE (Cat-1/4), and 5G modules for edge-computing gateways.</li>
            </ul>

            <h3>Power Optimization</h3>
            <p>
              For battery-operated devices, we engineer hardware architectures that sleep in the nano-amp range. We utilize advanced profiling tools to map the entire energy budget, ensuring multi-year lifespans on single coin cells, or designing energy harvesting systems (solar, thermal) for perpetual operation.
            </p>
          </div>

          <div className="bg-surface rounded-md p-8 border border-hairline sticky top-32">
            <h3 className="text-xl font-semibold text-navy-deep mb-6">IoT Capabilities</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-mono uppercase tracking-widest text-steel mb-3 flex items-center gap-2">
                  <Activity className="h-4 w-4" /> Sensor Integration
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">I2C / SPI / UART</span>
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">4-20mA Loops</span>
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">Precision ADC (24-bit)</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-mono uppercase tracking-widest text-steel mb-3 flex items-center gap-2">
                  <Radio className="h-4 w-4" /> RF & Antennas
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">PCB Trace Antennas</span>
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">Chip Antennas</span>
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">Impedance Matching</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-mono uppercase tracking-widest text-steel mb-3 flex items-center gap-2">
                  <Globe className="h-4 w-4" /> Cloud Hooks
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">MQTT / CoAP</span>
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">AWS IoT Core</span>
                  <span className="px-3 py-1 bg-white border border-hairline rounded text-sm text-charcoal">Azure IoT</span>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-hairline">
              <Link to="/contact" className="btn-primary w-full">
                Discuss Your IoT Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand 
        title="Building a connected product?" 
        subtitle="Let's discuss your sensor requirements, range constraints, and power budgets. We'll help you architect the right hardware foundation." 
      />
    </>
  );
}
