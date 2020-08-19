import { pick } from 'lodash-es'

// from { [clientKey]: value} to { [serverKey]: value }  (bridge provide clientKey and serverKey map, data provide value)
// if no [clientKey] is provided, then just use key from data
const mapBridge = bridge => data => {
    const result = {}
    const keys = Object.keys(data)
    for (const key of keys) {
        const newKey = bridge[key] ?? key
        result[newKey] = data[key]
    }
    return result
}

const reverseKeyValue = bridge => {
    const newBridgeArr = Object.entries(bridge).map(([key, value]) => [value, key])
    return Object.fromEntries(newBridgeArr)
}

export class MapBridge {
    constructor(bridge) {
        this.bridge = bridge
        this.map = mapBridge(bridge)
        this.reverseMap = mapBridge(reverseKeyValue(bridge))
    }

    pick(data, keys) {
        const newData = this.map(data)
        return pick(newData, keys)
    }

    reversePick(data, keys) {
        const newData = this.reverseMap(data)
        return pick(newData, keys)
    }
}
