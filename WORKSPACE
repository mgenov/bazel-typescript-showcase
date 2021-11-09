workspace(
    name = "world",
    managed_directories = {
        "@npm": ["3rdparty/node_modules"],
    },
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

######################
# NODEJS SUPPORT
######################
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "3720e99520c0bd31d23bf04cf365db934c5fa77badf68a8aaea523bbd442851a",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/4.4.3/rules_nodejs-4.4.3.tar.gz"],
)

http_archive(
    name = "bazel_skylib",
    sha256 = "97e70364e9249702246c0e9444bccdc4b847bed1eb03c5a3ece4f83dfe6abc44",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/bazel-skylib/releases/download/1.0.2/bazel-skylib-1.0.2.tar.gz",
        "https://github.com/bazelbuild/bazel-skylib/releases/download/1.0.2/bazel-skylib-1.0.2.tar.gz",
    ],
)

http_archive(
    name = "build_bazel_rules_postcss",
    sha256 = "3f0c754f97e3940ea90f4d6408bfb2aefb3850e7941572b22b1b88579c428ff9",
    strip_prefix = "rules_postcss-0.5.0",
    # Make sure to check for the latest version when you install
    url = "https://github.com/bazelbuild/rules_postcss/archive/0.5.0.tar.gz",
)

load("@build_bazel_rules_postcss//:package.bzl", "rules_postcss_dependencies")

rules_postcss_dependencies()

# The yarn_install rule runs yarn anytime the package.json or package-lock.json file changes.
# It also extracts any Bazel rules distributed in an npm package.
load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    name = "npm",
    package_json = "//3rdparty:package.json",
    yarn_lock = "//3rdparty:yarn.lock",
)
