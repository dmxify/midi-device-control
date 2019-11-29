/**
 * MidiDeviceControl class and utility module.
 * @module midi-device
 * @version 0.1.0
 * @author Jason Banfield <developer@dmxify.com>
 * @license MIT
 */

/**
 * Enum for Midi Device Control Types.
 * @readonly
 * @enum {ControlType} - BUTTON, ROTARY, SLIDER
 */
const ControlTypes = Object.freeze({
  BUTTON: {
    RANGE: 2
  },
  ROTARY: {
    RANGE: 127
  },
  SLIDER: {
    RANGE: 127
  }
});

/**
 * @class MidiDeviceControl
 * @property {number} id - MidiDeviceControl id
 * @property {string} name - MidiDeviceControl name, e.g. button-one
 * @property {ControlType} controlType - Button,Rotary,Slider
 * @property {array} midiMessageBindings
 */
const MidiDeviceControl = class {
  constructor(id, name, controlType, midiMessageBindings) {
    this._id = id;
    this._name = name;
    this._controlType = controlType;
    this._midiMessageBindings = midiMessageBindings;
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
}

module.exports = MidiDeviceControl;
