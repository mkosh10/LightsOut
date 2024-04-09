package com.lightsoutDemoM;

import org.eclipse.microprofile.openapi.annotations.OpenAPIDefinition;
import org.eclipse.microprofile.openapi.annotations.info.Info;
import org.eclipse.microprofile.openapi.annotations.servers.Server;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@OpenAPIDefinition(info = @Info(title = "Lights out solver", version = "v1", description = "Solver API"), servers = @Server(url ="http://localhost:8080/v1"))
@ApplicationPath("v1")
public class App extends Application {
}