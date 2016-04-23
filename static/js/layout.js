$(function () {
    
    window.editor = ace.edit("editor");
    editor.setTheme("ace/theme/tomorrow_night_eighties");
    editor.getSession().setMode("ace/mode/python");
    editor.setOption("showPrintMargin", false);
    editor.commands.addCommand({
        name: "showKeyboardShortcuts",
        bindKey: {win: "Ctrl-Alt-h", mac: "Command-Alt-h"},
        exec: function(editor) {
            ace.config.loadModule("ace/ext/keybinding_menu", function(module) {
                module.init(editor);
                editor.showKeyboardShortcuts()
            })
        }
    })

    document.getElementById('editor').style.fontSize='16px';

    function setEditor() {
        var pstyle = 'padding: 5px;';
        var pstyletop = "margin:5px; padding:4px;background:transparent; margin-left:0px;";
        var pstylecanvas="border:1px solid #bbbbbb; margin:0;margin-left:4px; \
            margin-right:3px;text-align:left; background:#fff;";

        $('#layout').w2layout({
            name: 'layout',
            padding: 0,
            panels: [
            { type: 'top', size: 48, resizable: false, style: pstyletop, content: $("#top").html() },
            { type: 'left', size: 220, resizable: true, style: pstyle, content: 'left', hidden:true },
            { type: 'right', size:'50%', resizable: true, style: pstyle, content:  editor.container },
            { type: 'main', size: '50%', resizable: true, style:pstylecanvas, content: "<canvas id='canvas'></canvas>" },
            { type: 'bottom', size: 60, resizable: true, style: pstyle, content: 'bottom', hidden:false },
                ]
            });
        }
    setEditor();
});