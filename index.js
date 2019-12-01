/**
 * MidiDeviceControl class and utility module.
 * @module midi-device
 * @author Jason Banfield <developer@dmxify.com>
 * @license MIT
 */

const MidiDeviceControl = class {

  /**
   * @property {number} id - MidiDeviceControl id
   * @property {string} name - MidiDeviceControl name, e.g. button-one
   * @property {ControlType} controlType - Button,Rotary,Slider
   * @property {array} midiMessageBindings - MidiMessage data bindings
   * @property {boolean} isInput - is this an input control
   * @property {boolean} isOutput - is this an output control
   */
  constructor(id, name, controlType, midiMessageBindings) {
    this._id = id;
    this._name = name;
    this._controlType = controlType;
    this._midiMessageBindings = midiMessageBindings;
    this._isInput = false;
    this._isOutput = false;
  }

  get id() {
    return this._id;
  }
  set id(val) {
    this._id = val;
  }

  get name() {
    return this._name;
  }
  set name(val) {
    this._name = val;
  }

  get controlType() {
    return this._controlType;
  }
  set controlType(val) {
    this._controlType = val;
  }

  get midiMessageBindings() {
    return this._midiMessageBindings;
  }
  set midiMessageBindings(val) {
    this._midiMessageBindings = val;
  }

  addMidiMessageBinding(val) {
    this._midiMessageBindings.push(val);
  }


  get isInput() {
    return this._isInput;
  }
  set isInput(val) {
    this._isInput = val;
  }

  get isOutput() {
    return this._isOutput;
  }
  set isOutput(val) {
    this._isOutput = val;
  }

  /**
   * Removes a specific MidiMessage binding from this MidiDeviceControl
   * @param {array} binding - The binding to remove, in the form of [channel,note,value]
   */
  removeMidiMessageBinding(binding) {
    for (var i = 0; i < this._midiMessageBindings.length; i++) {
      if (this._midiMessageBindings[i][0] == binding[0] && this._midiMessageBindings[i][1] == binding[1] && this._midiMessageBindings[i][2] == binding[2]) {
        this._midiMessageBindings.splice(i, 1);
        return;
      }
    }
  }

  /** Remove all MidiMessage bindings from this MidiDeviceControl */
  removeAllMidiMessageBindings() {
    this._midiMessageBindings = null;
  }
}

module.exports = MidiDeviceControl;
