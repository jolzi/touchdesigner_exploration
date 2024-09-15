uniform vec2 uPoint;
uniform vec3 uColor;
uniform float uRadius;
uniform float uAspectRatio;

out vec4 fragColor;
void main()
{
	vec2 p = vUV.xy - uPoint;
	p.x *= uAspectRatio;
	vec3 splat = exp(-dot(p,p) / uRadius) * uColor;

	vec3 base = texture(sTD2DInputs[0], vUV.st).xyz;

	vec4 color = vec4(base + splat, 1.0);
	fragColor = TDOutputSwizzle(color);
}

// uniform vec2 uPoint;
// uniform vec3 uColor;
// uniform float uRadius;
// uniform float uAspectRatio;

// out vec4 fragColor;

// void main() {
//     vec2 uv = vUV.st;
//     vec3 fluidColor = texture(sTD2DInputs[0], uv).xyz;

//     // Fake a reflective-like sheen
//     vec3 reflectionColor = fluidColor * 0.5 + 0.5 * fluidColor.yzx;

//     // Simulate specular highlights
//     float specular = pow(clamp(dot(normalize(uv - 0.5), vec2(0.0, 1.0)), 0.0, 1.0), 20.0);
//     vec3 specularColor = specular * vec3(1.0, 1.0, 1.0);

//     // Calculate the splat effect
//     vec2 p = uv - uPoint;
//     p.x *= uAspectRatio;
//     vec3 splat = exp(-dot(p, p) / uRadius) * uColor;

//     // Combine the effects
//     vec3 combinedColor = reflectionColor + specularColor + splat;

//     fragColor = TDOutputSwizzle(vec4(combinedColor, 1.0));
// }
