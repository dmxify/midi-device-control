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
   * @property {enum} type - BUTTON,FADER
   * @property {enum} subType - ON,ON_OFF,SPECIAL
   * @property {enum} mode - TRIGGER,REPEAT
   * @property {array} midiMessageBindings - MidiMessage data bindings
   */
  constructor({
    id = null,
    name = 'unnamed',
    type = null,
    subType = null,
    mode = null,
    midiMessageBindings = []
  }) {
    this._id = id;
    this._name = name;
    this._type = type;
    this._subType = subType;
    this._mode = mode;
    this._midiMessageBindings = midiMessageBindings;
    this.addMidiMessageBinding = this.addMidiMessageBinding.bind(this)
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

  get type() {
    return this._type;
  }
  set type(val) {
    this._type = val;
  }
  get subType() {
    return this._subType;
  }
  set subType(val) {
    this._subType = val;
  }
  get mode() {
    return this._mode;
  }
  set mode(val) {
    this._mode = val;
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
