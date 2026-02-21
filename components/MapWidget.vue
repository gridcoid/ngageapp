<template>
  <el-card
    shadow="never"
    class="bg-transparent h-full"
    :body-style="{ padding: '0', border: '0', height: '100%' }"
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

        const marker = L.marker([item.lat, item.lng], {
          icon: L.divIcon({
            className: 'custom-marker',
            html: `
              <div class="marker-bubble">
                ${item.count}
              </div>
            `,
            iconSize: [40, 40],
            iconAnchor: [20, 20],
          }),
        }).bindPopup(`<strong>${item.name}</strong><br/>Count: ${item.count}`)

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
.leaflet-container {
  height: 100%;
  width: 100%;
}
.custom-marker {
  background: transparent;
  border: none;
}
.marker-bubble {
  width: 40px;
  height: 40px;
  background: #3b82f6;
  border: 2px solid #1e40af;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}
</style>
