// Top-level build file where you can add configuration options common to all sub-projects/modules.
plugins {
    id("com.android.application") version "8.7.2" apply false
    alias(libs.plugins.kotlin.android) apply false
    alias(libs.plugins.kotlin.compose) apply false
}

repositories {
    google()
    mavenCentral()
    // ...existing code...
}

allprojects {
    repositories {
        google()
        mavenCentral()
        // ...existing code...
    }
}