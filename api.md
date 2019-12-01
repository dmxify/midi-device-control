<a name="module_midi-device"></a>

## midi-device
MidiDeviceControl class and utility module.

**Author**: Jason Banfield <developer@dmxify.com>  
**License**: MIT  

* [midi-device](#module_midi-device)
    * [~MidiDeviceControl](#module_midi-device..MidiDeviceControl)
        * [.removeMidiMessageBinding(binding)](#module_midi-device..MidiDeviceControl+removeMidiMessageBinding)
        * [.removeAllMidiMessageBindings()](#module_midi-device..MidiDeviceControl+removeAllMidiMessageBindings)

<a name="module_midi-device..MidiDeviceControl"></a>

### midi-device~MidiDeviceControl
**Kind**: inner class of [<code>midi-device</code>](#module_midi-device)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | MidiDeviceControl id |
| name | <code>string</code> | MidiDeviceControl name, e.g. button-one |
| controlType | <code>ControlType</code> | Button,Rotary,Slider |
| midiMessageBindings | <code>array</code> | MidiMessage data bindings |
| isInput | <code>boolean</code> | is this an input control |
| isOutput | <code>boolean</code> | is this an output control |


* [~MidiDeviceControl](#module_midi-device..MidiDeviceControl)
    * [.removeMidiMessageBinding(binding)](#module_midi-device..MidiDeviceControl+removeMidiMessageBinding)
    * [.removeAllMidiMessageBindings()](#module_midi-device..MidiDeviceControl+removeAllMidiMessageBindings)

<a name="module_midi-device..MidiDeviceControl+removeMidiMessageBinding"></a>

#### midiDeviceControl.removeMidiMessageBinding(binding)
Removes a specific MidiMessage binding from this MidiDeviceControl

**Kind**: instance method of [<code>MidiDeviceControl</code>](#module_midi-device..MidiDeviceControl)  

| Param | Type | Description |
| --- | --- | --- |
| binding | <code>array</code> | The binding to remove, in the form of [channel,note,value] |

<a name="module_midi-device..MidiDeviceControl+removeAllMidiMessageBindings"></a>

#### midiDeviceControl.removeAllMidiMessageBindings()
Remove all MidiMessage bindings from this MidiDeviceControl

**Kind**: instance method of [<code>MidiDeviceControl</code>](#module_midi-device..MidiDeviceControl)  
