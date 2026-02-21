<template>
  <el-card
    shadow="never"
    class="bg-transparent h-full"
    :body-style="{ padding: '0', border: '0', height: 'calc(100% - 20px)' }"
  >
    <div class="flex flex-col h-full">
      <div ref="map" class="flex-1 w-full h-full"></div>
    </div>
  </el-card>
</template>

<script>
import 'leaflet/dist/leaflet.css'

export default {
  name: 'MapWidget',

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      map: null,
      markersLayer: null,
    }
  },

  computed: {
    items() {
      return this.data?.data || []
    },
  },

  mounted() {
    this.initMap()
  },

  methods: {
    initMap() {
      const L = this.$leaflet

      this.map = L.map(this.$refs.map, {
        attributionControl: true,
        minZoom: 4,
        maxZoom: 12,
      }).setView([-2.5489, 118.0149], 5)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(this.map)

      this.markersLayer = L.layerGroup().addTo(this.map)

      // 🔥 IMPORTANT FIX
      this.$nextTick(() => {
        setTimeout(() => {
          this.map.invalidateSize()
          this.renderMarkers()
        }, 100)
      })
    },

    renderMarkers() {
      if (!this.map) return

      const L = this.$leaflet
      this.markersLayer.clearLayers()

      const bounds = []

      this.items.forEach((item) => {
        if (!item.lat || !item.lng) return

        const size = Math.max(30, Math.min(60, item.count * 5))

        const marker = L.marker([item.lat, item.lng], {
          icon: L.divIcon({
            className: 'custom-marker',
            html: `
              <div class="marker-bubble" style="
                width:${size}px;
                height:${size}px;
                font-size:${size / 3}px;
              ">
                ${item.count}
              </div>
            `,
            iconSize: [size, size],
            iconAnchor: [size / 2, size / 2],
          }),
        })

        marker.addTo(this.markersLayer)
        bounds.push([item.lat, item.lng])
      })

      if (bounds.length > 1) {
        this.map.fitBounds(bounds, { padding: [20, 20] })
      } else if (bounds.length === 1) {
        this.map.setView(bounds[0], 8)
      } else {
        // No data → reset to Indonesia
        this.map.setView([-2.5489, 118.0149], 5)
      }
    },
  },

  beforeDestroy() {
    if (this.map) this.map.remove()
  },
}
</script>

<style>
.custom-marker {
  background: transparent;
  border: none;
}

.marker-bubble {
  width: 40px;
  height: 40px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 14px;
  color: #ffffff;

  /* 🔥 Semi-transparent background */
  background: rgba(59, 130, 246, 0.75);

  /* 🔥 Soft transparent border */
  border: 3px solid rgba(59, 130, 246, 0.35);

  /* 🔥 Soft outer glow */
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15), 0 4px 10px rgba(0, 0, 0, 0.25);

  backdrop-filter: blur(2px);
}
.leaflet-control-attribution {
  font-size: 8px;
  background: rgba(255, 255, 255, 0.75);
  padding: 2px 6px;
  opacity: 0.5;
}
</style>
