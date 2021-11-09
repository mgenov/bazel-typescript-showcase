"Minimal rule for combining multiple css files into one."

def _css_library_impl(ctx):
    cat_args = ""
    for f in ctx.files.srcs:
        cat_args += " " + f.path

    out = ctx.actions.declare_file(ctx.files.outs[0].path)
    ctx.actions.run_shell(
        inputs = ctx.files.srcs,
        outputs = [out],
        command = "cat " + cat_args + " > %s" % (out.path),
        progress_message = "Concatenating....",
        use_default_shell_env = True,
    )

    return [
        DefaultInfo(
            files = depset([out]),
            runfiles = ctx.runfiles(files = [out]),
        ),
    ]

css_library = rule(_css_library_impl, attrs = {
    "srcs": attr.label_list(allow_files = True),
    "outs": attr.label_list(allow_files = True),
})
