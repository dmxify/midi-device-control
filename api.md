<a name="module_midi-device"></a>

## midi-device
MidiDeviceControl class and utility module.

**Version**: 0.1.0  
**Author**: Jason Banfield <developer@dmxify.com>  
**License**: MIT  

* [midi-device](#module_midi-device)
    * [~MidiDeviceControl](#module_midi-device..MidiDeviceControl)
    * [~ControlTypes](#module_midi-device..ControlTypes) : <code>enum</code>

<a name="module_midi-device..MidiDeviceControl"></a>

### midi-device~MidiDeviceControl
**Kind**: inner class of [<code>midi-device</code>](#module_midi-device)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | MidiDeviceControl id |
| name | <code>string</code> | MidiDeviceControl name, e.g. button-one |
| controlType | <code>ControlType</code> | Button,Rotary,Slider |
| midiMessageBindings | <code>array</code> |  |

<a name="module_midi-device..ControlTypes"></a>

### midi-device~ControlTypes : <code>enum</code>
Enum for Midi Device Control Types.

**Kind**: inner enum of [<code>midi-device</code>](#module_midi-device)  
**Read only**: true  
